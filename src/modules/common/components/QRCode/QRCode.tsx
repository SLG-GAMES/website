// import {useQRCodeStyle} from './useQRCodeStyle';
import QRCode from 'qrcode.react';

// import LogoPng from 'assets/img/logo/logo.png';

interface QRCodeCompProps {
  size: number;
  value?: string | any
}

export const QRCodeComp = ({ size = 70, value }: QRCodeCompProps) => {
  // const classes=useQRCodeStyle();
  return (
    <QRCode
      id={value}
      renderAs='svg'
      value={value}
      // level='M'
      size={size}
      fgColor='#000000'
      style={
        {
          margin: 'auto',
          border: '1px solid #ffffff',
        }
      }
      // imageSettings={//
      //   {
      //   src: LogoPng,
      //   height: 20,
      //   width: 20,
      //   excavate: true, //
      //   }
      // }
    />
  );
};
