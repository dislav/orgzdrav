import React, { useState } from 'react';
import dayjs from 'dayjs';

import { DownloadableItemFragment } from '@graphql';

import {
    Container,
    Icon,
    Ext,
    VideoModal,
    Content,
    Availability,
} from './Document.styled';
import Modal from '@components/Modal/Modal';
import Video from '@components/Video/Video';

import { ArchiveFile, DefaultFile, ImageFile, MediaFile } from '@icons/icons';
import Button from '@components/Button/Button';

interface IDocument extends DownloadableItemFragment {
    className?: string;
}

const Document: React.FC<IDocument> = ({
    className,
    name,
    accessExpires,
    downloadsRemaining,
    download,
    url,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const fileExt = download?.fileExt || 'default';

    const iconsMap = new Map<string[], React.ReactNode>([
        // eslint-disable-next-line react/jsx-key
        [['jpg', 'jpeg', 'png', 'webp'], <ImageFile />],
        // eslint-disable-next-line react/jsx-key
        [['mp4', 'mp3'], <MediaFile />],
        // eslint-disable-next-line react/jsx-key
        [['zip', 'rar'], <ArchiveFile />],
        // eslint-disable-next-line react/jsx-key
        [['pdf'], <DefaultFile />],
    ]);

    const onClickHandler = () => {
        if (['mp4'].includes(fileExt)) {
            setIsOpen(true);
        } else if (url) {
            window.open(url);
        }
    };

    return (
        <>
            <Container className={className}>
                <Icon>
                    {Array.from(iconsMap.entries()).find(([keys]) =>
                        keys.includes(fileExt)
                    )?.[1] || <DefaultFile />}

                    {download?.fileExt && <Ext>{download.fileExt}</Ext>}
                </Icon>

                <Content>
                    {name && <span>{name}</span>}
                    {(accessExpires || downloadsRemaining) && (
                        <Availability limit={!downloadsRemaining}>
                            {!!accessExpires && !!downloadsRemaining && (
                                <span>
                                    Доступен до{' '}
                                    {dayjs(accessExpires)
                                        .utc(false)
                                        .format('DD.MM.YYYY')}
                                </span>
                            )}
                            {downloadsRemaining !== undefined &&
                                downloadsRemaining !== null && (
                                    <span>
                                        {downloadsRemaining > 0
                                            ? `Доступно скачиваний: ${downloadsRemaining}`
                                            : 'Достигнут лимит загрузкок'}
                                    </span>
                                )}
                        </Availability>
                    )}
                </Content>

                <Button onClick={onClickHandler} disabled={!downloadsRemaining}>
                    Скачать
                </Button>
            </Container>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <VideoModal>
                    <Video
                        url={url || ''}
                        playing
                        controls
                        config={{
                            file: {
                                attributes: {
                                    controlsList: 'nodownload',
                                },
                            },
                        }}
                    />
                </VideoModal>
            </Modal>
        </>
    );
};

export default Document;
