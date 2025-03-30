import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { COMMON_STYLES } from '../../styles/commonStyles';

interface LayoutProps {
    children: ReactNode;
    className?: string;
}

/**
 * Layout 컴포넌트
 * - 전체 페이지의 기본 레이아웃 구조 제공
 * - Header, Footer, Main 컨텐츠 영역 포함
 * - 반응형 디자인 지원
 */
const Layout = ({ children, className = '' }: LayoutProps): JSX.Element => {
    return (
        <div className={`${COMMON_STYLES.components.page.layout} ${className}`.trim()}>
            <Header />
            <main 
                className={COMMON_STYLES.components.page.content}
                role="main"
                id="main-content"
            >
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
