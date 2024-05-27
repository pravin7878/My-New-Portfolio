// test.jsx
import React from 'react';
import { MouseEnterProvider } from './component/ui/3d-card';
import { CardContainer, CardBody, CardItem } from './component/ui/3d-card';
import pkProfile from "./assets/pk-profile.png"


export function ThreeDCardDemo() {
  return (
    <MouseEnterProvider>
      <CardContainer className="inter-var p-0 m-0  " >
          <CardItem
            translateZ="250"
           
            style={{ margin: 'auto', padding: '0', width: '100%'}}
            className={'dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] p-0 m-0'}
          >
            <img
              src={pkProfile}
              style={{ height: 'auto', width: '100%' }}
              className="object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
      </CardContainer>
  </MouseEnterProvider>
  );
}
