import * as React from 'react';
import {
    keyframes,
    ImageProps,
    forwardRef,
    usePrefersReducedMotion,
} from '@chakra-ui/react';
import logo from './logo.svg';
import elGato from './elgato.jpeg';
import elGatoDos from './elgatodos.jpeg';
import huhCat from './huhCat.jpeg';
import { Image } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;
const gatos = [
    { gato: logo },
    { gato: elGato },
    { gato: elGatoDos },
    { gato: huhCat },
];

export const Logo = forwardRef<ImageProps, 'img'>((props, ref) => {
    const prefersReducedMotion = usePrefersReducedMotion();

    const animation = prefersReducedMotion
        ? undefined
        : `${spin} infinite 15s linear`;

    return (
        <Grid templateColumns={`repeat(${gatos.length}, 1fr)`} gap={10}>
            {gatos.map((value: any) => {
                return (
                    <GridItem>
                        <Image
                            borderRadius='full'
                            animation={animation}
                            src={value.gato}
                            ref={ref}
                            {...props}
                        />
                    </GridItem>
                );
            })}
        </Grid>
    );
});
