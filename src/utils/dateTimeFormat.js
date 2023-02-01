import { format } from 'date-fns';
export const DEFAULT_FORMAT = 'dd/MM/yyyy HH:ss';
export const formatDate = (time = null, fmt = 'yyyy-MM-dd') => {
  if (time === null) return null;
  return format(new Date(time), fmt);
};
