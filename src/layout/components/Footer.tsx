import { TFunction } from 'i18next';
import { Icon } from '@iconify/react';

type HeaderProps = {
  t: TFunction;
};

/**
 * Web footer
 * @param t translations
 * @constructor
 */
export const Footer: React.FC<HeaderProps> = ({ t }) => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>{t('Get connected with me')} :</span>
        </div>
        <div>
          <a
            target="_blank"
            href="https://www.instagram.com/a.dall95/"
            className="me-4 text-reset"
            rel="noreferrer"
          >
            <Icon icon="akar-icons:instagram-fill" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/alfredo-sergio-dallari-700864118/"
            className="me-4 text-reset"
            rel="noreferrer"
          >
            <Icon icon="logos:linkedin-icon" />
          </a>
          <a
            target="_blank"
            href="https://github.com/alfredone270895"
            className="me-4 text-reset"
            rel="noreferrer"
          >
            <Icon icon="line-md:github-twotone" />
          </a>
        </div>
      </section>
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">{t('About me')}</h6>
              <p>{t('I am a full stack sotware engineer based on Milan')} </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                {t('Technologies')}
              </h6>
              <p>
                <Icon icon="logos:react" /> <Icon icon="logos:redux" />
              </p>
              <p>
                <Icon icon="logos:javascript" />{' '}
                <Icon icon="logos:typescript-icon" />
              </p>
              <p>
                <Icon icon="vscode-icons:file-type-php2" />
              </p>
              <p>
                <Icon icon="logos:nodejs" />
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                {t('Useful links')}
              </h6>
              <p>
                <a href="/technology" className="text-reset">
                  {t('Tech')}
                </a>
              </p>
              <p>
                <a href="/graduation" className="text-reset">
                  {t('Graduation')}
                </a>
              </p>
              <p>
                <a href="/contact" className="text-reset">
                  {t('Contact')}
                </a>
              </p>
              <p>
                <a href="/job-experience" className="text-reset">
                  {t('Job Experience')}
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">{t('Contact')}</h6>
              <p>Via trieste 10, Cologno monzese , Milan</p>
              <p>
                <Icon icon="akar-icons:envelope" />
                <a href="mailto:alfredodallari@outlook.com">
                  alfredodallari@outlook.com
                </a>
              </p>
              <p>
                <Icon icon="fxemoji:cellphone" /> +39 3664935606
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4">
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="/">
          Alfredo Dallari Sergio - Made by me
        </a>
      </div>
    </footer>
  );
};
