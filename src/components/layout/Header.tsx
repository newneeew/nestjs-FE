import { Link } from 'react-router-dom';
import { COMMON_STYLES, NAV_LINKS } from '../../styles/commonStyles';

interface HeaderProps {
    className?: string;
}

/**
 * Header 컴포넌트
 * - 상단 고정 네비게이션 바
 * - 로고와 네비게이션 링크 포함
 * - 반응형 디자인 지원
 */
const Header = ({ className = '' }: HeaderProps): JSX.Element => {
    return (
        <header 
            className={`${COMMON_STYLES.components.header.wrapper} ${className}`.trim()}
            role="banner"
        >
            <nav 
                className={COMMON_STYLES.components.header.nav}
                role="navigation"
            >
                <h1 className={COMMON_STYLES.components.header.logo.wrapper}>
                    <Link 
                        to="/" 
                        className={`${COMMON_STYLES.components.header.link} flex items-center`}
                        aria-label="홈으로 이동"
                    >
                        <span className={COMMON_STYLES.components.header.logo.icon} aria-hidden="true">
                            🎓
                        </span>
                        Elice Project
                    </Link>
                </h1>
                <div className="flex items-center space-x-4">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={link.className}
                            aria-label={`${link.label}페이지로 이동`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Header;
