import React from 'react';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
import Input_box from './input_box';
import Off_screen from './off_screen';

function app() {
    return (
        <RecoilRoot>
            <Input_box />
            <Off_screen />
        </RecoilRoot>
    );
}

export default app