function logDeviceDetectionResult(device: 'desktop' | 'mobile'): void {
    console.log(`detected ${device} device!`);
}
export function isMobile(): boolean {
    const result = 'ontouchstart' in document.documentElement;
    logDeviceDetectionResult(result ? 'mobile' : 'desktop');
    return result;
}
