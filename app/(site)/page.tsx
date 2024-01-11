// import styles from './page.module.css';
import type { Metadata } from 'next';
import { Button, HTag, PTag, Rating, Tag } from '../components';
import { RatingWithState } from '../components/RatingWithState';

export const metadata: Metadata = {
  description: 'Some description text 2',
}

export default function Home() {
  
  return (
    <main>
      <HTag tag='h1'>Some Text</HTag>
      <HTag tag='h2'>Some Text</HTag>
      <HTag tag='h3'>Some Text</HTag>
      <Button arrow appearance='primary' className='1123'>Text</Button>

      <PTag size='s'>Text small</PTag>
      <PTag size='m'>Text medium</PTag>
      <PTag size='l'>Text large</PTag>
      <hr />

      <Tag size={'s'} color={'red'}>small</Tag>
      <Tag size={'m'} color={'red'}>med</Tag>

      <Tag size={'s'} color={'green'}>small</Tag>
      <Tag size={'m'} color={'green'}>med</Tag>

      <Tag size={'s'} color={'gray'}>small</Tag>
      <Tag size={'m'} color={'gray'}>med</Tag>

      <Tag size={'s'} color={'black'}>small</Tag>
      <Tag size={'m'} color={'black'}>med</Tag>
      <hr />

      <RatingWithState />
    </main>
  )
}
