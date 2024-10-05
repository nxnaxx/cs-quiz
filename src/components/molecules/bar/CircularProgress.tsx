import React, { useEffect, useMemo, useRef } from 'react';
import styled from '@emotion/styled';
import { mobile } from '@styles/responsive';
import { center } from '@styles/mixins';
import { Chart, ArcElement, Tooltip, Legend, DoughnutController } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend, DoughnutController);

interface CircularProgressProps {
  progress: number;
}

const ProgressContainer = styled.div`
  ${center}
  position: relative;
  width: 120px;
  height: 120px;

  @media (max-width: ${mobile}) {
    width: 96px;
    height: 96px;
  }
`;

const ProgressBar = styled.canvas`
  width: 100%;
  height: 100%;
  transform: translateY(-4%);
`;

const ProgressLabel = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CircularProgress = React.memo(({ progress }: CircularProgressProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const chartData = useMemo(
    () => ({
      datasets: [
        {
          data: [progress, 100 - progress],
          backgroundColor: ['#6807f9', '#ebeef4'],
          hoverBackgroundColor: ['#6807f9', '#ebeef4'],
          borderWidth: 0,
          borderRadius: [15, 0],
        },
      ],
    }),
    [progress],
  );

  const chartOptions = useMemo(
    () => ({
      cutout: '80%',
      responsive: true,
      plugins: {
        tooltip: {
          enabled: false,
        },
      },
    }),
    [],
  );

  // useEffect(() => {
  //   const ctx = canvasRef.current?.getContext('2d');
  //   if (ctx) {
  //     const chart = new Chart(ctx, {
  //       type: 'doughnut',
  //       data: {
  //         datasets: [
  //           {
  //             data: [progress, 100 - progress],
  //             backgroundColor: ['#6807f9', '#ebeef4'],
  //             hoverBackgroundColor: ['#6807f9', '#ebeef4'],
  //             borderWidth: 0,
  //             borderRadius: [15, 0],
  //           },
  //         ],
  //       },
  //       options: {
  //         cutout: '80%',
  //         responsive: true,
  //         plugins: {
  //           tooltip: {
  //             enabled: false,
  //           },
  //         },
  //       },
  //     });

  //     return () => chart.destroy();
  //   }
  // }, [progress]);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      const chart = new Chart(ctx, {
        type: 'doughnut',
        data: chartData,
        options: chartOptions,
      });

      return () => chart.destroy();
    }
  }, [chartData, chartOptions]);

  return (
    <ProgressContainer>
      <ProgressBar ref={canvasRef} />
      <ProgressLabel>{progress}</ProgressLabel>
    </ProgressContainer>
  );
});

CircularProgress.displayName = 'CircularProgress';

export default CircularProgress;
