import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
export declare class ErrorFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): void;
}
