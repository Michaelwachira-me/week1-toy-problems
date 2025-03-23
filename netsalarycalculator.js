function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
  
    // PAYE Calculation (Based on 2025 rates)
    let paye = 0;
    if (grossSalary <= 24000) {
      paye = grossSalary * 0.10;
    } else if (grossSalary <= 32333) {
      paye = 2400 + (grossSalary - 24000) * 0.25;
    } else if (grossSalary <= 500000) {
      paye = 4483.25 + (grossSalary - 32333) * 0.30;
    } else if (grossSalary <= 800000) {
      paye = 147833.30 + (grossSalary - 500000) * 0.325;
    } else {
      paye = 245333.30 + (grossSalary - 800000) * 0.35;
    }
  
    // SHIF Calculation (2.75% of gross salary)
    const shif = grossSalary * 0.0275;
  
    // NSSF Calculation (Tier I and Tier II)
    let nssf = 0;
    if (grossSalary <= 8000) {
      nssf = grossSalary * 0.06;
    } else {
      nssf = 8000 * 0.06 + Math.min((grossSalary - 8000) * 0.06, (72000 - 8000) * 0.06);
    }
  
    // Housing Levy Calculation (1.5% of gross salary)
    const housingLevy = grossSalary * 0.015;
  
    // Personal Relief (Monthly)
    const personalRelief = 2400;
  
    // Taxable Income (after personal relief)
    const taxableIncome = paye - personalRelief;
  
    // Net Salary Calculation
    const netSalary = grossSalary - paye - shif - nssf - housingLevy;
  
    return {
      grossSalary,
      paye,
      shif,
      nssf,
      housingLevy,
      personalRelief,
      taxableIncome,
      netSalary,
    };
  }
  
  console.log(calculateNetSalary(50000, 5000));