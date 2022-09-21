import { toast } from 'wc-toast';

export const errorMsg = (msg) => {
  toast.error(msg);
};

export const success = (msg) => {
  toast.success(msg, {duration: 4000});
};

export const loading = (msg) => {
  toast.loading(msg, { duration: 4000 });
};

export const normal = (msg) => {
  toast(msg);
};
