const blackList = /(\$|{|&{2}|\|{2})/g;

const sanitize = (input) => {
  input.replace(blackList, '');
};

export default sanitize;
