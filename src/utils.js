export const digits = (num, nb) =>  {
    let zeros = "";
    for (let i=0; i<nb; i++)
        zeros = zeros.concat("0");
    return(zeros+num).slice(nb*-1);
}
