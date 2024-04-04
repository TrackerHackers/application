const blackList = /($|{|&{2}|\|{2})/gm;

const sanitize = (input) => {
  const output = `${input}`.replaceAll(blackList, '');
  // console.log(`Sanatize: ${input} => ${output}`);
  return output;
};

export default sanitize;
