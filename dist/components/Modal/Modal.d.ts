import { NiceModalHocProps } from '@ebay/nice-modal-react';
import { FC, ReactEventHandler, ReactNode } from 'react';
export interface ModalProps {
    id: string;
    title: string;
    subtitle?: string;
    content: ReactNode;
    variant?: 'primary' | 'secondary' | 'alert';
    action: ReactEventHandler<HTMLButtonElement>;
    actionName: string;
    cancelName: string;
    'data-testid'?: string;
}
export declare const Modal: FC<ModalProps & NiceModalHocProps>;
//# sourceMappingURL=Modal.d.ts.map