import { Subject } from 'rxjs';

const subject = new Subject();

export const messageService = {
    sendMessage: item => subject.next({ item }),
    clearMessages: () => subject.next(),
    onMessage: () => subject.asObservable()
};