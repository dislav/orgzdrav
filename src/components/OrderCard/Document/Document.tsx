import React, { useState } from 'react';
import dayjs from 'dayjs';

import { DownloadableItemProps } from '@graphql/fragments/downloadableItem';
import {
    Container,
    Name,
    Footer,
    Date,
    Format,
    VideoModal,
} from './Document.styled';
import Modal from '@components/Modal/Modal';
import Video from '@components/Video/Video';

interface IDocument extends DownloadableItemProps {
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

    const onClickHandler = () => {
        if (['mp4'].includes(download.fileExt)) {
            setIsOpen(true);
        } else {
            window.open(url);
        }
    };

    return (
        <>
            <Container className={className} onClick={onClickHandler}>
                <Name>{name}</Name>

                <Footer>
                    {accessExpires && (
                        <Date>
                            {dayjs(accessExpires)
                                .utc(false)
                                .format('DD.MM.YYYY')}
                        </Date>
                    )}
                    <Format>{download.fileExt}</Format>
                </Footer>
            </Container>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <VideoModal>
                    <Video
                        url={url}
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
