// src/components/MetricsSection.js
import React from 'react';
import NumberSpinner from './numberSpinner';
import './metricsSection.css'; // Import custom CSS

const MetricsSection = ({ title, metrics }) => {
  return (
    <div className="metrics-section">
      <h3>{title}</h3>
      <div className="metrics-list">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-item">
            <div className="metric-label">{metric.label}</div>
            <div className="metric-value">
              {metric.spinner ? (
                <NumberSpinner value={metric.value} />
              ) : (
                metric.value
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricsSection;
