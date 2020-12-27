import { Button, Card, CardContent, CardMedia } from "@material-ui/core";
import React, { Component } from "react";
import dayjs from "dayjs";
export default class Transaction extends Component {
  handleClick = () => {
    this.props.history.push(`/transaction/${this.props.transaction.tid}`);
  };
  render() {
    const {
      amount,
      createdAt,
      imageUrl,
      status,
      message,
      username,
    } = this.props.transaction;

    return (
      <Card
        variant="outlined"
        style={{ position: "relative", display: "flex", cursor: "pointer" }}
        onClick={this.handleClick}
      >
        <CardMedia
          image={imageUrl}
          title=""
          style={{ width: 58, borderRadius: 50, height: 58, margin: 10 }}
          component="img"
        />
        <CardContent style={{ objectFit: "cover", padding: 0, width: "100%" }}>
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td>
                  <p>{username}</p>
                  <p>{dayjs(createdAt).format("DD MMM YY hh:mm")}</p>
                </td>
                <td style={{ textAlign: "end" }}>
                  <Button
                    variant="outlined"
                    style={{ marginRight: 10 }}
                    color={status === "success" ? "primary" : "error"}
                  >
                    {status}
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  <h4 style={{ marginTop: -2 }}>₹{amount}</h4>
                  {message && message !== "" && <p>{message}</p>}
                </td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
    );
  }
}
