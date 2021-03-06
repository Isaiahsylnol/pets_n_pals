import { useState, useEffect } from 'react';
import ModalService from './Modal/services/ModalService';
import styles from './Modal/styles/ModalRoot.module.css';

export default function ModalRoot() {

  const [modal, setModal] = useState({});
  useEffect(() => {
    ModalService.on('open', ({ component, props, target }) => {
      setModal({
        component,
        props,
        target,
        close: value => {
          setModal({});
        },
      });
    });
  }, []);

  const ModalComponent = modal.component ? modal.component : null;

  return (
    <section className={ modal.component ? styles.modalRoot : '' }>
      { ModalComponent && (
        <ModalComponent
          { ...modal.props }
          taget
          close={ modal.close }
          className={ ModalComponent ? 'd-block' : '' }
        />
      )}
    </section>
  );
}