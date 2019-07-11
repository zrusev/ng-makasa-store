export function ShowLoader() {
// tslint:disable-next-line: ban-types
    return (Class: Function) => {
        Object.defineProperty(Class.prototype, 'showLoader', {
            value: true
        });
    };
}

export function HideLoader(triggerAction: string) {
// tslint:disable-next-line: ban-types
    return (Class: Function) => {
        Object.defineProperty(Class.prototype, 'triggerAction', {
            value: triggerAction
        });
    };
}
