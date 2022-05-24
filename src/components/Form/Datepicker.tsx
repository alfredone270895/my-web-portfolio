import { Col, Form, Row } from 'react-bootstrap';
import { DayPicker } from 'react-day-picker';
import { useCallback, useEffect, useRef, useState } from 'react';
import useWindowDimensions, { SMARTPHONE_BREAKPOINT } from '../../utils/screen';
import { FeedbackType } from 'react-bootstrap/Feedback';

type DatepickerProps = {
  name: string;
  value?: Date;
  onChange?: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined,
  ) => void;
  message?: string;
  label?: string;
  feedbackType?: FeedbackType;
};
export const Datepicker: React.FC<DatepickerProps> = ({
  name,
  value,
  onChange,
  label,
  message,
  feedbackType = 'invalid',
}) => {
  const { width } = useWindowDimensions();

  const [day, setDays] = useState<string>('');
  const [month, setMonths] = useState<string>('');
  const [year, setYears] = useState<string>('');

  const effectDone = useRef(false);

  useEffect(() => {
    if (width <= SMARTPHONE_BREAKPOINT) {
      if (value) {
        const stringValue = value.toString();
        const split = stringValue.split('-');
        if (split.length === 3) {
          setDays(split[2]);
          setYears(split[0]);
          setMonths(split[1]);
          effectDone.current = true;
        }
      }
    }
  }, []);

  const handleChange = useCallback(
    (val: Date | string | undefined, elementName?: string) => {
      if (onChange) {
        if (width > SMARTPHONE_BREAKPOINT) {
          onChange(name, val);
        } else {
          switch (elementName?.substr(name!.length)) {
            case 'Day':
              setDays(val as string);
              if (month && year) {
                onChange(
                  name,
                  new Date(Number(year), Number(month) - 1, Number(val)),
                );
              }
              break;
            case 'Month':
              setMonths(val as string);
              if (day && year) {
                onChange(
                  name,
                  new Date(Number(year), Number(val) - 1, Number(day)),
                );
              }
              break;
            case 'Year':
              setYears(val as string);
              if (day && month) {
                onChange(
                  name,
                  new Date(Number(val), Number(month) - 1, Number(day)),
                );
              }
              break;
            default:
              break;
          }
        }
      }
    },
    [],
  );

  if (width > SMARTPHONE_BREAKPOINT) {
    return (
      <Form.Group className="mb-3 mt-3">
        {label && <Form.Label>{label}</Form.Label>}
        <DayPicker
          mode="single"
          selected={value}
          onSelect={(selectedValue) => handleChange(selectedValue)}
        />
        {message && (
          <Form.Control.Feedback type={feedbackType}>
            {message}
          </Form.Control.Feedback>
        )}
      </Form.Group>
    );
  }

  return (
    effectDone && (
      <Form.Group className="mb-3 mt-3">
        {label && <Form.Label>{label}</Form.Label>}
        <Row>
          <Col sm={4}>
            <Form.Select
              name={`${name}Day`}
              className="form-control w-30 ml-2"
              value={day}
              key={`${name}Day`}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            >
              <option value="">GIORNO</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </Form.Select>
          </Col>
          <Col sm={4}>
            <Form.Select
              name={`${name}Month`}
              className="form-control w-30"
              value={month}
              key={`${name}Month`}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            >
              <option value="">MESE</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </Form.Select>
          </Col>
          <Col sm={4}>
            <Form.Select
              name={`${name}Year`}
              className="form-control w-30"
              value={year}
              key={`${name}Year`}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            >
              <option value="">ANNO</option>
              <option value="1930">1930</option>
              <option value="1931">1931</option>
              <option value="1932">1932</option>
              <option value="1933">1933</option>
              <option value="1934">1934</option>
              <option value="1935">1935</option>
              <option value="1936">1936</option>
              <option value="1937">1937</option>
              <option value="1938">1938</option>
              <option value="1939">1939</option>
              <option value="1940">1940</option>
              <option value="1941">1941</option>
              <option value="1942">1942</option>
              <option value="1943">1943</option>
              <option value="1944">1944</option>
              <option value="1945">1945</option>
              <option value="1946">1946</option>
              <option value="1947">1947</option>
              <option value="1948">1948</option>
              <option value="1949">1949</option>
              <option value="1950">1950</option>
              <option value="1951">1951</option>
              <option value="1952">1952</option>
              <option value="1953">1953</option>
              <option value="1954">1954</option>
              <option value="1955">1955</option>
              <option value="1956">1956</option>
              <option value="1957">1957</option>
              <option value="1958">1958</option>
              <option value="1959">1959</option>
              <option value="1960">1960</option>
              <option value="1961">1961</option>
              <option value="1962">1962</option>
              <option value="1963">1963</option>
              <option value="1964">1964</option>
              <option value="1965">1965</option>
              <option value="1966">1966</option>
              <option value="1967">1967</option>
              <option value="1968">1968</option>
              <option value="1969">1969</option>
              <option value="1970">1970</option>
              <option value="1971">1971</option>
              <option value="1972">1972</option>
              <option value="1973">1973</option>
              <option value="1974">1974</option>
              <option value="1975">1975</option>
              <option value="1976">1976</option>
              <option value="1977">1977</option>
              <option value="1978">1978</option>
              <option value="1979">1979</option>
              <option value="1980">1980</option>
              <option value="1981">1981</option>
              <option value="1982">1982</option>
              <option value="1983">1983</option>
              <option value="1984">1984</option>
              <option value="1985">1985</option>
              <option value="1986">1986</option>
              <option value="1987">1987</option>
              <option value="1988">1988</option>
              <option value="1989">1989</option>
              <option value="1990">1990</option>
              <option value="1991">1991</option>
              <option value="1992">1992</option>
              <option value="1993">1993</option>
              <option value="1994">1994</option>
              <option value="1995">1995</option>
              <option value="1996">1996</option>
              <option value="1997">1997</option>
              <option value="1998">1998</option>
              <option value="1999">1999</option>
              <option value="2000">2000</option>
              <option value="2001">2001</option>
              <option value="2002">2002</option>
              <option value="2003">2003</option>
              <option value="2004">2004</option>
              <option value="2005">2005</option>
              <option value="2006">2006</option>
              <option value="2007">2007</option>
              <option value="2008">2008</option>
              <option value="2009">2009</option>
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
            </Form.Select>
          </Col>
        </Row>
        {message && (
          <Form.Control.Feedback type={feedbackType}>
            {message}
          </Form.Control.Feedback>
        )}
      </Form.Group>
    )
  );
};
