import {px} from '../components/px';

export const baseEchartsOptions = {
  textStyle: {
    fontSize: px(12),
    color: '#79839e',
  },
  title: {show: false},
  legend: {show: false},
  grid: {
    containLabel: true,
    left: '2%',
    top: '4%',
    right: '5%',
    bottom: '4%',
  }
};