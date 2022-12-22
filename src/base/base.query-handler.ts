import { Context } from 'src/context/context.model';

export abstract class BaseQueryHandler {
  get contextId() {
    const ctx = Context.get();
    if (!ctx) throw new Error('Please import ContextModule');
    return ctx.id;
  }
  get request() {
    const ctx = Context.get();
    if (!ctx) throw new Error('Please import ContextModule');
    return ctx.request;
  }

  get response() {
    const ctx = Context.get();
    if (!ctx) throw new Error('Please import ContextModule');
    return ctx.response;
  }
}
