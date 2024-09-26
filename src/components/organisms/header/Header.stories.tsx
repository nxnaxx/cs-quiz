import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from '../../../pages/Home';

const meta: Meta<typeof Header> = {
  title: 'organisms/Header',
  component: Header,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SampleHeader: Story = {
  render: () => (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  ),
};
