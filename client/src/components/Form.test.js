import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

import Register from './/Register'

describe('<Forms />',()=> {
    it('Forms render without crashing',() => {
        render(<Forms />)
    })
})