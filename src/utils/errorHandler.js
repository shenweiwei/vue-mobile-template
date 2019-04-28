import TraceKit from 'tracekit';

//系统错误捕获
export const errorHandler = (error) => {
    TraceKit.report(error);
}

// 打印错误报告
TraceKit.report.subscribe(function printError(errorReport) {
    console.error(errorReport);
});