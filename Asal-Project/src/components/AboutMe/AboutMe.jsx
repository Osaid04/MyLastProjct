import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import './AboutMe.css';

const AboutMe = () => {
    const { t } = useTranslation(); // Initialize useTranslation hook

    return (
        <div>
            <h1>{t('aboutMe.title')}</h1>
            <div className="main-flex">
                <section>
                    <div className="me">
                        <p dangerouslySetInnerHTML={{ __html: t('aboutMe.description') }} />
                    </div>
                </section>
                <section>
                    <table className="family">
                        <caption>{t('aboutMe.familyCaption')}</caption>
                        <thead>
                            <tr>
                                <th>{t('aboutMe.family.name')}</th>
                                <th>{t('aboutMe.family.age')}</th>
                                <th>{t('aboutMe.family.gender')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* to return all family memebers as key value using map*/ }
                            {t('aboutMe.family.members', { returnObjects: true }).map((member, index) => (
                                <tr key={index}>
                                    <td>{member.name}</td>
                                    <td>{member.age}</td>
                                    <td>{member.gender}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </div>
            <br />
            <br />
        </div>
    );
}

export default AboutMe;
