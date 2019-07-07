import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable, of } from 'rxjs';
import { tap, finalize, catchError } from 'rxjs/operators';
import { IImage } from 'src/app/core/models/image';

@Component({
  selector: 'app-upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.css']
})
export class UploadTaskComponent implements OnInit {
  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;

  @Input() file: File;
  @Output() imageEmitter: EventEmitter<IImage> = new EventEmitter();

  constructor(private storage: AngularFireStorage,
              private db: AngularFirestore) { }

  ngOnInit() {
    this.startUpload();
  }

  startUpload() {
    const path = `promotions/${Date.now()}_${this.file.name}`;
    const ref = this.storage.ref(path);

    this.task = this.storage.upload(path, this.file);

    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges().pipe(
      tap(console.log),
      finalize(() => {
        ref.getDownloadURL().subscribe((url) => {
          this.downloadURL = url;
          this.db.collection('files').add({ downloadURL: this.downloadURL, path });
          this.imageEmitter.emit({ name: this.file.name, url: this.downloadURL, path });
        });

      }),
      catchError((error) => {
        console.error(error);
        return of();
      })
    );
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }
}
