// 기본 스타일 정의
const BASE_STYLES = {
    html: 'antialiased',
    body: 'bg-white text-gray-900',
    link: 'text-blue-600 hover:text-blue-800',
    headings: 'font-bold text-gray-900'
} as const;

// 컴포넌트 스타일 정의
const COMPONENT_STYLES = {
    // 레이아웃 컨테이너
    container: {
        default: 'container-default',
        responsive: 'container-responsive',
        narrow: 'container-narrow',
        wide: 'container-wide'
    },
    
    // 헤더
    header: {
        wrapper: 'header-wrapper',
        nav: 'header-nav',
        link: 'header-link',
        logo: {
            wrapper: 'header-logo',
            icon: 'header-logo-icon'
        }
    },
    
    // 푸터
    footer: {
        wrapper: 'footer-wrapper',
        container: 'footer-container',
        content: 'footer-content',
        text: 'footer-text'
    },
    
    // 페이지 레이아웃
    page: {
        layout: 'page-layout',
        content: 'page-content'
    },
    
    // 타이포그래피
    typography: {
        h1: 'text-h1',
        h2: 'text-h2',
        default: 'text-default',
        small: 'text-small'
    }
} as const;

// 유틸리티 스타일 정의
const UTILITY_STYLES = {
    // 텍스트 관련
    text: {
        balance: 'text-balance',
        gradient: 'text-gradient'
    },
    
    // 스크롤바
    scrollbar: {
        hide: 'scrollbar-hide'
    },
    
    // 애니메이션
    animation: {
        fadeIn: 'fade-in',
        fadeInEnter: 'fade-in-enter',
        fadeInEnterActive: 'fade-in-enter-active'
    },
    
    // 접근성
    accessibility: {
        srOnly: 'sr-only',
        focusRing: 'focus-ring'
    }
} as const;

// 공통 스타일 정의
export const COMMON_STYLES = {
    base: BASE_STYLES,
    components: COMPONENT_STYLES,
    utilities: UTILITY_STYLES
} as const;

// 네비게이션 링크 타입 및 설정
export interface NavLink {
    readonly path: string;
    readonly label: string;
    readonly className?: string;
}

export const NAV_LINKS: readonly NavLink[] = [
    { 
        path: '/login', 
        label: 'Login', 
        className: `${COMPONENT_STYLES.header.link} mr-4` 
    },
    { 
        path: '/signup', 
        label: 'Signup',
        className: COMPONENT_STYLES.header.link
    }
] as const; 