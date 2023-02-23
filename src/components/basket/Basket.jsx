import { Box, Modal as MuiModal } from "@mui/material";
import React from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  deleteBasketItem,
  updateBasketItem,
} from "../../store/basket/basketSlice";
import BasketItem from "./BasketItem";
import TotalAmount from "./TotalAmount";

const Basket = ({ onClose, open }) => {
  const items = useSelector((state) => state.basket.items);

  const dispatch = useDispatch();

  const getTotalPrice = useCallback(() => {
    return items.reduce((sum, { amount, price }) => sum + amount * price, 0);
  }, [items]);

  const decrementAmount = (id, amount) => {
    if (amount > 1) {
      dispatch(updateBasketItem({ amount: amount - 1, id: id }));
    } else {
      dispatch(deleteBasketItem(id));
    }
  };

  const incrementAmount = (id, amount) => {
    dispatch(updateBasketItem({ amount: amount + 1, id: id }));
  };

  return (
    <MuiModal onClose={onClose} open={open}>
      <StyledModalContent>
        <Content>
          {items.length ? (
            <FixedHeightContainer>
              {items.map((item) => (
                <BasketItem
                  key={item._id}
                  incrementAmount={() => incrementAmount(item._id, item.amount)}
                  decrementAmount={() => decrementAmount(item._id, item.amount)}
                  title={item.title}
                  price={item.price}
                  amount={item.amount}
                />
              ))}
            </FixedHeightContainer>
          ) : null}
          <TotalAmount
            price={getTotalPrice()}
            onCLose={onClose}
            onOrder={() => {}}
          />
        </Content>
      </StyledModalContent>
    </MuiModal>
  );
};

export default Basket;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem 1.5rem 1rem;
`;

const FixedHeightContainer = styled.div`
  max-height: 228px;
  overflow-y: scroll;
`;
const StyledModalContent = styled(Box)`
  position: fixed;
  top: 26%;
  left: 28%;
  width: 54%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
