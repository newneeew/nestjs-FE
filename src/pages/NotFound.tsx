import { Link } from 'react-router-dom';
import { COMMON_STYLES } from '../styles/commonStyles';

/**
 * NotFound 컴포넌트
 * - 404 에러 페이지
 * - 홈으로 돌아가는 링크 제공
 * - 사용자 친화적인 에러 메시지 표시
 */
const NotFound = (): JSX.Element => {
    return (
        <div className={`${COMMON_STYLES.utilities.animation.fadeIn} ${COMMON_STYLES.components.container.default}`}>
            <h1 className={`${COMMON_STYLES.components.typography.h1} ${COMMON_STYLES.utilities.text.gradient}`}>
                404
            </h1>
            <p className={`${COMMON_STYLES.components.typography.default} ${COMMON_STYLES.utilities.text.balance}`}>
                Page Not Found
            </p>
            <Link 
                to="/" 
                className={`${COMMON_STYLES.components.header.link} ${COMMON_STYLES.utilities.accessibility.focusRing}`}
                aria-label="홈으로 돌아가기"
            >
                Go back to Home
            </Link>
        </div>
    );
};

export default NotFound; 