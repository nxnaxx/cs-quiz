import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../../../App';
import Header from './Header';

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
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  ),
};
