import React from 'react';
import useAlternaDevice from '@/hooks/alterna_device';
import Footer_desktop from './desktop/footer_desktop';
import Footer_mobile from './mobile/footer_mobile';

export default function Footer() {
    const device = useAlternaDevice();
    return (
        <>
            {device === 'mobile' ? (
                <Footer_mobile />
            ) : (
                <Footer_desktop />
            )}
        </>
    );
}