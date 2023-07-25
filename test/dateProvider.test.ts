import { dayConverter, monthConverter } from "../utils/dateProvider";

describe("dateConverter", () => {
  it("Should return 'Sun'", () => {
    expect(dayConverter(0)).toBe("Sun");
  });

  it("Should return 'Mon'", () => {
    expect(dayConverter(1)).toBe("Mon");
  });

  it("Should return 'Tue'", () => {
    expect(dayConverter(2)).toBe("Tue");
  });

  it("Should return 'Wed'", () => {
    expect(dayConverter(3)).toBe("Wed");
  });

  it("Should return 'Thu'", () => {
    expect(dayConverter(4)).toBe("Thu");
  });

  it("Should return 'Fri'", () => {
    expect(dayConverter(5)).toBe("Fri");
  });

  it("Should return 'Sat'", () => {
    expect(dayConverter(6)).toBe("Sat");
  });
});

describe("monthConverter", () => {
  it("Should return 'Jan'", () => {
    expect(monthConverter(0)).toBe("Jan");
  });

  it("Should return 'Feb'", () => {
    expect(monthConverter(1)).toBe("Feb");
  });

  it("Should return 'Mar'", () => {
    expect(monthConverter(2)).toBe("Mar");
  });

  it("Should return 'Apr'", () => {
    expect(monthConverter(3)).toBe("Apr");
  });

  it("Should return 'May'", () => {
    expect(monthConverter(4)).toBe("May");
  });

  it("Should return 'Jun'", () => {
    expect(monthConverter(5)).toBe("Jun");
  });

  it("Should return 'Jul'", () => {
    expect(monthConverter(6)).toBe("Jul");
  });

  it("Should return 'Aug'", () => {
    expect(monthConverter(7)).toBe("Aug");
  });

  it("Should return 'Sep'", () => {
    expect(monthConverter(8)).toBe("Sep");
  });

  it("Should return 'Oct'", () => {
    expect(monthConverter(9)).toBe("Oct");
  });

  it("Should return 'Nov'", () => {
    expect(monthConverter(10)).toBe("Nov");
  });

  it("Should return 'Dec'", () => {
    expect(monthConverter(11)).toBe("Dec");
  });
});
