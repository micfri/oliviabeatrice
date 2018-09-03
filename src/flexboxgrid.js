import React, { Component } from 'react';
import logo from './logo.svg';

class Flexboxgrid extends Component {
  render() {
    return (
      <div className="Flexboxgrid">
        <div class="container">
          <h1>12 column grid</h1>
          <div class="row">
            <div class="col-sm-1">
              col-xs-1
            </div>
          </div>
          <div class="row">
            <div class="col-xs-2">
              col-xs-2
            </div>
          </div>
          <div class="row">
            <div class="col-xs-3">
              col-xs-3
            </div>
          </div>
          <div class="row">
            <div class="col-xs-4">
              col-xs-4
            </div>
          </div>
          <div class="row">
            <div class="col-xs-5">
              col-xs-5
            </div>
          </div>
          <div class="row">
            <div class="col-xs-6">
              col-xs-6
            </div>
          </div>
        <div class="row">
          <div class="col-xs-7">
            col-xs-7
          </div>
        </div>
        <div class="row">
          <div class="col-xs-8">
            col-xs-8
          </div>
        </div>
        <div class="row">
          <div class="col-xs-9">
            col-xs-9
          </div>
        </div>
        <div class="row">
          <div class="col-xs-10">
            col-xs-10
          </div>
        </div>
        <div class="row">
          <div class="col-xs-11">
            col-xs-11
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            col-xs-12
          </div>
        </div>
        <h1>11 offset classes</h1>
        <div class="row small">
          <div class="col-xs-1 col-xs-offset-1">
            col-xs-offset-1
          </div>
        </div>
        <div class="row small">
          <div class="col-xs-1 col-xs-offset-2">
            col-xs-offset-2
          </div>
        </div>
        <div class="row small">
          <div class="col-xs-1 col-xs-offset-3">
            col-xs-offset-3
          </div>
        </div>
        <div class="row small">
          <div class="col-xs-1 col-xs-offset-4">
            col-xs-offset-4
          </div>
        </div>
        <div class="row small">
          <div class="col-xs-1 col-xs-offset-5">
            col-xs-offset-5
          </div>
        </div>
        <div class="row small">
          <div class="col-xs-1 col-xs-offset-6">
            col-xs-offset-6
          </div>
        </div>
        <div class="row small">
          <div class="col-xs-1 col-xs-offset-7">
            col-xs-offset-7
          </div>
        </div>
        <div class="row small">
          <div class="col-xs-1 col-xs-offset-8">
            col-xs-offset-8
          </div>
        </div>
        <div class="row small">
          <div class="col-xs-1 col-xs-offset-9">
            col-xs-offset-9
          </div>
        </div>
        <div class="row small">
          <div class="col-xs-1 col-xs-offset-10">
            col-xs-offset-10
          </div>
        </div>
        <div class="row small">
          <div class="col-xs-1 col-xs-offset-11">
            col-xs-offset-11
          </div>
        </div>
        <h1>Mix columns and offset</h1>
        <div class="row">
          <div class="col-xs-2">
            col-xs-2
          </div>
          <div class="col-xs-3 col-xs-offset-2">
            col-xs-3 col-xs-offset-2
          </div>
          <div class="col-xs-5">
            col-xs-5
          </div>
        </div>
        <div class="row">
          <div class="col-xs-3">
            col-xs-3
          </div>
          <div class="col-xs-4 col-xs-offset-5">
            col-xs-4 col-xs-offset-5
          </div>
        </div>
        <div class="row">
          <div class="col-xs-4 col-xs-offset-4">
            col-xs-4 col-xs-offset-4
          </div>
        </div>
        <h1>Auto width columns</h1>
        <div class="row">
          <div class="col-auto">
            col-auto
          </div>
          <div class="col-auto">
            col-auto
          </div>
        </div>
        <div class="row">
          <div class="col-auto">
            col-auto
          </div>
          <div class="col-auto">
            col-auto
          </div>
          <div class="col-auto">
            col-auto
          </div>
        </div>
        <div class="row">
          <div class="col-auto">
            col-auto
          </div>
          <div class="col-auto">
            col-auto
          </div>
          <div class="col-auto">
            col-auto
          </div>
          <div class="col-auto">
            col-auto
          </div>
        </div>
        <div class="row">
          <div class="col-auto">
            col-auto
          </div>
          <div class="col-auto">
            col-auto
          </div>
          <div class="col-auto">
            col-auto
          </div>
          <div class="col-auto">
            col-auto
          </div>
          <div class="col-auto">
            col-auto
          </div>
        </div>
        <h1>Mix fixed and auto width columns</h1>
        <div class="row">
          <div class="col-xs-2">
            col-xs-2
          </div>
          <div class="col-auto">
            col-auto
          </div>
        </div>
        <div class="row">
          <div class="col-auto">
            col-auto
          </div>
          <div class="col-xs-4">
            col-xs-4
          </div>
          <div class="col-auto">
            col-auto
          </div>
        </div>
        <div class="row">
          <div class="col-xs-4 col-xs-offset-2">
            col-xs-4 col-xs-offset-2
          </div>
          <div class="col-auto">
            col-auto
          </div>
        </div>
        <h1>Nesting</h1>
        <div class="row">
          <div class="col-xs-12">
            col-xs-12
            <div class="row">
              <div class="col-xs-6">
                col-xs-6
                <div class="row">
                  <div class="col-auto">
                    col-auto
                  </div>
                  <div class="col-auto">
                    col-auto
                    <div class="row">
                      <div class="col-xs-4">
                        col-xs-4
                      </div>
                      <div class="col-xs-4">
                        col-xs-4
                      </div>
                      <div class="col-xs-4">
                        col-xs-4
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-6">
                col-xs-6
              </div>
            </div>
          </div>
        </div>
        <h1>Responsive (Mobile First)</h1>
        <div class="row">
          <div class="col-lg-3 col-md-4 col-sm-6">
            col-lg-3 col-md-4 col-sm-6
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            col-lg-3 col-md-4 col-sm-6
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            col-lg-3 col-md-4 col-sm-6
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            col-lg-3 col-md-4 col-sm-6
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-lg-offset-2 col-lg-5">
            col-md-4 col-lg-offset-2 col-lg-5
          </div>
        </div>
        <br/>
      </div>
          </div>
        );
      }
    }

export default Flexboxgrid;
