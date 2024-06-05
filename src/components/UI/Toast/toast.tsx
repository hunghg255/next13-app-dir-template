/* eslint-disable @typescript-eslint/no-unused-vars */
import classNames from 'classnames';
import { toast as t } from 'sonner';

// import { Icon } from '~components/UI/IconFont/Icon';

import styles from './index.module.scss';

export const toast = {
  success: (message: string) => {
    t.custom((id) => (
      <div className={classNames(styles.msg, styles.msgSuccess)}>
        <div>
          {/* <Icon
            icon='t4font-check-circle-fill'
            color='success-main'
            onClick={() => t.dismiss(id)}
          /> */}
          {/* <Text type='caption2' color='text-primary'>
            {message}
          </Text> */}
        </div>
        {/* <Icon icon='t4font-ic-close' onClick={() => t.dismiss(id)} /> */}
      </div>
    ));
  },

  error: (message: string) => {
    t.custom((id) => (
      <div className={classNames(styles.msg, styles.msgError)}>
        <div>
          {/* <Icon
            icon='t4font-ic-close-circle-fill'
            color='error-main'
            onClick={() => t.dismiss(id)}
          /> */}
          {/* <Text type='caption2' color='text-primary'>
            {message}
          </Text> */}
        </div>
        {/* <Icon icon='t4font-ic-close' onClick={() => t.dismiss(id)} /> */}
      </div>
    ));
  },
};
