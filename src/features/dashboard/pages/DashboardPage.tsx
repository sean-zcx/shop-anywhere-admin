
export default function DashboardPage() {
  // 先用假数据占位，后续接入 API / Redux 很自然
  const stats = [
    { title: "今日 GMV", value: "¥128,430", hint: "+12.4%", trend: "up" as const },
    { title: "今日订单", value: "1,024", hint: "+3.1%", trend: "up" as const },
    { title: "退款率", value: "1.8%", hint: "-0.2%", trend: "down" as const },
    { title: "客单价", value: "¥125.4", hint: "持平", trend: "flat" as const },
  ];

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
