import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";
import CloseIcon from "../../static/icons/close-icon.png";
import { Form } from "../common/form";
import { formatCurrency } from "../../utils/helpers";
import { Button } from "../common/button";
import { Divider, InputNumber } from "antd";

const CartPopup: FC<Props> = ({ children }) => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState<boolean>(false);

  const onFinish = (value: any) => {
    setVisible(false);
  };

  const initialValues = {
    services: data,
  };

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Sheet
          title={
            (
              <div className="absolute inset-x-[16px] flex items-center">
                <div className="text-lg font-semibold">Giỏ hàng</div>
                <div
                  className="absolute right-0 ml-auto size-[16px]"
                  onClick={() => setVisible(false)}
                >
                  <img
                    src={CloseIcon}
                    alt=""
                    className="size-full object-cover"
                  />
                </div>
              </div>
            ) as unknown as string
          }
          visible={visible}
          onClose={() => {
            setVisible(false);
            form.resetFields();
          }}
          mask
          handler={false}
          unmountOnClose
          height={"90vh"}
          style={{
            background: "#FFF",
            borderRadius: "8px 8px 0 0",
          }}
        >
          <Form
            form={form}
            onFinish={onFinish}
            initialValues={initialValues}
            className="flex-1 px-[16px]"
          >
            <Divider className="my-[12px]" />
            <Form.List name="services">
              {(fields, { remove }) => (
                <div className="flex flex-col gap-[12px] overflow-auto pb-[150px]">
                  {/* Cart Item */}
                  {fields.map((field, index) => {
                    const itemIndex = field.name;
                    const item = form.getFieldValue("services")[itemIndex];

                    return (
                      <React.Fragment key={index}>
                        <div className="flex flex-col gap-[12px]">
                          {/* Title */}
                          <div className="text-base font-semibold">
                            {item.title}
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-semibold text-gray7">
                              {formatCurrency(item.price)}
                            </div>
                            <Form.Item
                              noStyle
                              shouldUpdate={(prevValues, curValues) =>
                                prevValues.services !== curValues.services
                              }
                            >
                              {() => {
                                const item =
                                  form.getFieldValue("services")[itemIndex];
                                return (
                                  <div className="flex items-center gap-[16px]">
                                    <Button.Icon
                                      icon={<div className="text-black">-</div>}
                                      className="size-[20px] !rounded-[6.6px] bg-green3"
                                      onClick={() => {
                                        const currQuantity = item.quantity;
                                        const nextQuantity = Math.max(
                                          currQuantity - 1,
                                          0,
                                        );
                                        if (nextQuantity === 0) {
                                          remove(itemIndex);
                                        } else {
                                          form.setFieldValue(
                                            ["services", itemIndex, "quantity"],
                                            nextQuantity,
                                          );
                                        }
                                      }}
                                    />
                                    <InputNumber
                                      value={item.quantity}
                                      min={0}
                                      onChange={(value) => {
                                        if (value !== null && !isNaN(value)) {
                                          form.setFieldValue(
                                            ["services", itemIndex, "quantity"],
                                            value,
                                          );
                                        }
                                      }}
                                      controls={false}
                                      className="custom-input-number rounded-[8px]"
                                      style={{
                                        width: `${String(item.quantity).length * 12}px`,
                                        minWidth: "30px",
                                        maxWidth: "200px",
                                      }}
                                    />
                                    <Button.Icon
                                      icon={<div className="text-white">+</div>}
                                      className="size-[20px] !rounded-[6.6px] bg-green5"
                                      onClick={() => {
                                        const currQuantity = item.quantity;
                                        const nextQuantity = currQuantity + 1;
                                        form.setFieldValue(
                                          ["services", itemIndex, "quantity"],
                                          nextQuantity,
                                        );
                                      }}
                                    />
                                  </div>
                                );
                              }}
                            </Form.Item>
                          </div>
                        </div>
                        {index < fields.length - 1 ? (
                          <Divider className="m-0" />
                        ) : null}
                      </React.Fragment>
                    );
                  })}
                </div>
              )}
            </Form.List>
            {/* Footer */}
            <div
              className="fixed inset-x-0 bottom-0 flex items-center justify-between bg-white px-[16px] pb-[24px] pt-[12px]"
              style={{ boxShadow: "0px -4px 24px 0px #A6A6A633" }}
            >
              <div className="flex flex-col gap-[8px]">
                <div className="text-sm font-medium text-gray6">
                  Số lượng: 1
                </div>
                <div className="text-lg font-bold">
                  <span className="text-gray7">Tổng: </span>
                  <span className="text-red6">{formatCurrency(600000)}</span>
                </div>
              </div>
              <Button
                text={
                  <div className="text-lg font-medium text-white">Đặt hàng</div>
                }
                className="h-[50px] flex-none rounded-[12px] bg-green6 px-[20px]"
              />
            </div>
          </Form>
        </Sheet>,
        document.body,
      )}
    </>
  );
};

export { CartPopup };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};

const data = [
  {
    title: "Vệ sinh & Bảo dưỡng - Máy gi(Có tháo lồng giặt)",
    price: 300000,
    quantity: 2,
  },
  {
    title: "Vệ sinh & bảo dưỡng - Điều hoà tiêu chuẩn",
    price: 300000,
    quantity: 1,
  },
];
