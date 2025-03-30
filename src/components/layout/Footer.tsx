import { COMMON_STYLES } from '../../styles/commonStyles';

interface FooterProps {
    className?: string;
}

/**
 * Footer 컴포넌트
 * - 하단 고정 푸터
 * - 저작권 정보 표시
 * - 로고와 프로젝트 정보 포함
 */
const Footer = ({ className = '' }: FooterProps): JSX.Element => {
    const currentYear = new Date().getFullYear();

    return (
        <footer 
            className={`${COMMON_STYLES.components.footer.wrapper} ${className}`.trim()}
            role="contentinfo"
        >
            <div className={COMMON_STYLES.components.footer.container}>
                <div className={COMMON_STYLES.components.footer.content}>
                    <div className="flex items-center">
                        <span className={COMMON_STYLES.components.header.logo.icon}>🎓</span>
                        <span className={COMMON_STYLES.components.typography.default}>
                            Elice Project
                        </span>
                    </div>
                    <p className={COMMON_STYLES.components.footer.text}>
                        &copy; {currentYear} Elice Project. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
