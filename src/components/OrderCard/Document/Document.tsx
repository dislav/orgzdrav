import React, { useState } from 'react';
import { Tooltip } from '@mui/material';
import dayjs from 'dayjs';

import { DownloadableItemFragment } from '@graphql';

import {
    Container,
    Ext,
    TooltipContent,
    VideoModal,
} from './Document.styled';
import Modal from '@components/Modal/Modal';
import Video from '@components/Video/Video';

import { ArchiveFile, DefaultFile, ImageFile, MediaFile } from '@icons/icons';

interface IDocument extends DownloadableItemFragment {
    className?: string;
}

const Document: React.FC<IDocument> = ({
    className,
    name,
    accessExpires,
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
            <Tooltip
                placement="top"
                title={
                    <TooltipContent>
                        {name && (
                            <span>
                                {name.length > 16
                                    ? `Файл: ${name.slice(0, 16)}...${
                                          download?.fileExt || ''
                                      }`
                                    : name}
                            </span>
                        )}
                        <span>
                            Доступен до{' '}
                            {dayjs(accessExpires)
                                .utc(false)
                                .format('DD.MM.YYYY')}
                        </span>
                    </TooltipContent>
                }
            >
                <Container className={className} onClick={onClickHandler}>
                    {Array.from(iconsMap.entries()).find(([keys]) =>
                        keys.includes(fileExt)
                    )?.[1] || <DefaultFile />}

                    {download?.fileExt && <Ext>{download.fileExt}</Ext>}
                </Container>
            </Tooltip>

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
