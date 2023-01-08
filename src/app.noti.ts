import { NotificationHandler, RequestHandler } from 'src/mediator/mediator.decorator';
import { Notification, INotificationHandler, IRequestHandler, Request } from 'src/mediator/mediator.service';

export class TestNotification extends Notification {
  id: number;
}

@NotificationHandler(TestNotification)
export class TestNotificationHandler1 implements INotificationHandler<TestNotification> {
  handle(data1: TestNotification) {
    console.log('data1', data1);
  }
}

export class TestRequest extends Request<string> {
  id: number;
}

@RequestHandler(TestRequest)
export class TestRequestHandler implements IRequestHandler<TestRequest, string> {
  handle(data: TestRequest): Promise<string> {
    console.log(data);
    return Promise.resolve('');
  }
}
