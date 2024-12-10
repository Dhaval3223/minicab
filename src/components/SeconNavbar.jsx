import React from "react";
import './secondheader.css'

import subscriptionIcon from '../image/subscription.png'
import basketIcon from '../image/basket.png'
import auctionIcon from '../image/auction.png'
import marketIcon from '../image/market.png'
import claimIcon from '../image/claim.png'
import vendorIcon from '../image/vendor.png'
import treasuryIcon from '../image/treasury.png'
import reportIcon from '../image/report.png'
import { useLocation } from "react-router-dom";
const NavigationBar = () => {
  const location=useLocation();
  const sub=location.pathname.includes('subscriptionDetail')

  return (
    <section className="new_nav">
    <div className="nav_tabs">
      <ul>
        <li className={location.pathname.includes('subscriptionDetail') && 'active'}>
          <a href="/subscriptionDetail">
            <span>
              <img src={subscriptionIcon} />
            </span>
            <small>Subscription</small>
          </a>
        </li>
        <li className={location.pathname.includes('basket') && 'active'}>
          <a href="/basket">
            <span>
              <img src={basketIcon} />
            </span>
            <small>Basket</small>
          </a>
        </li>
        <li className={location.pathname.includes('auction') && 'active'}>
          <a href="/auction">
            <span>
              <img src={auctionIcon} />
            </span>
            <small>Auction</small>
          </a>
        </li>
        <li className={location.pathname.includes('market') && 'active'}>
          <a href="/market">
            <span>
              <img src={marketIcon} />
            </span>
            <small>Market</small>
          </a>
        </li>
        <li className={location.pathname.includes('claims') && 'active'}>
          <a href="/claims">
            <span>
              <img src={claimIcon} />
            </span>
            <small>Claim</small>
          </a>
        </li>
        <li className={location.pathname.includes('vendors') && 'active'}>
          <a href="/vendors">
            <span>
              <img src={vendorIcon} />
            </span>
            <small>Vendor</small>
          </a>
        </li>
        <li className={location.pathname.includes('treasury') && 'active'}>
          <a href="/treasury">
            <span>
              <img src={treasuryIcon} />
            </span>
            <small>Treasury</small>
          </a>
        </li>
        <li className={location.pathname.includes('reports') && 'active'}>
          <a href="/reports">
            <span>
              <img src={reportIcon} />
            </span>
            <small>Reports</small>
          </a>
        </li>
      </ul>
    </div>
  </section>
  
  );
};

export default NavigationBar;
