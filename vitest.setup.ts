import '@testing-library/jest-dom'

// Polyfills for JSDOM
class IntersectionObserverMock {
  constructor(_cb: any, _options?: any) {}
  observe() {}
  unobserve() {}
  disconnect() {}
}

if (!('IntersectionObserver' in globalThis)) {
  ;(globalThis as any).IntersectionObserver = IntersectionObserverMock as any
}

