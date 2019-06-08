![under-construction](https://img.shields.io/badge/under-construction-yellow.svg) ![last commit](https://img.shields.io/github/last-commit/zrusev/ng-makasa-store.svg)


# Online store

[MaKaSa Bio](https://makasa-store.firebaseapp.com/)

#### Application: 
- public part (accessible without authentication)
- private part (available for registered users)
- administrative part (available for administrators only)

#### Features:
- Google Firestore hosted - database and storage; Firestore rules
- Angular Material UI
- Roles: reader, writer, admin. Role based access to different components
- Language translation service
- GDPR consent implementation
- Routing modules. Authentication guards. Lazy loading on the administative part
- Custom directive. Upload multiple files to storage as part of the administative part
- Google Maps implementation