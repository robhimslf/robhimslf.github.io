import { FC, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EmailAddress, FacebookProfileUrl, GithubProfileUrl } from '../../../utils/environment';
import './index.scss';

const ProfileLinks: FC = () => (
    <div className="profile-links">
        <a href={ GithubProfileUrl } className="profile-link" target="blank">
            <FontAwesomeIcon fixedWidth icon={[ 'fab', 'github' ]} />
        </a>
        <a href={ `mailto:${EmailAddress}` } className="profile-link" target="blank">
            <FontAwesomeIcon fixedWidth icon={[ 'far', 'envelope' ]} />
        </a>
    </div>
);

export default memo( ProfileLinks );
