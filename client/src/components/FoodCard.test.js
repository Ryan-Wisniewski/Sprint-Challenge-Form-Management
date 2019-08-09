import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

import FoodCard from './FoodCard'

describe("<FoodCard />", () => {
    it("should render a list of food provided on props", () => {
      const foodData = [];
  
      const comp = render(<FoodCard food={foodData} />);
  
      const food = comp.getAllByTestId("name");
      expect(food).toHaveLength(foodData.length);
    });
  });
  