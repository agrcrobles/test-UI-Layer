 const edits = [[140, 'Product Registration'], [141, 'Product Service Claim Response'],
[142, 'Product Service Claim'], [143, 'Product Service Notification'], [159, 'Motion Picture Booking Confirmation'], [170, 'Revenue Receipts Statement'],
[180, 'Return Merchandise Authorization and Notification'],[244, 'Product Source Information'], [249, 'Animal Toxicological Data'],
[251, 'Pricing Support'], [290, 'Cooperative Advertising Agreements'], [501, 'Vendor Performance Review'], [503, 'Pricing History'],
[504, 'Clauses and Provisions'], [511, 'Requisition'], [517, 'Material Obligation Validation'], [536, 'Logistics Reassignment'],
[561, 'Contract Abstract'], [567, 'Contract Completion Status'], [568, 'Contract Payment Management Report'], [620, 'Excavation Communication'],
[625, 'Well Information'], [650, 'Maintenance Service Order'], [753, 'Request for Routing Instructions'], [754, 'Routing Instructions'],
[805, 'Contract Pricing Proposal'], [806, 'Project Schedule Reporting'], [816, 'Organizational Relationships'], [818, 'Commission Sales Report'],
[830, 'Planning Schedule with Release Capability'], [832, 'Price/Sales Catalog'], [836, 'Procurement Notices'], [838, 'Trading Partner Profile'],
[839, 'Project Cost Reporting'], [840, 'Request for Quotation'], [841, 'Specifications/Technical Information'], [842, 'Nonconformance Report'],
[843, 'Response to Request for Quotation'], [845, 'Price Authorization Acknowledgment/Status'], [846, 'Inventory Inquiry/Advice'],
[847, 'Material Claim'], [848, 'Material Safety Data Sheet'], [850, 'Purchase Order'], [851, 'Asset Schedule'], [852, 'Product Activity Data'],
[853, 'Routing and Carrier Instruction'], [855, 'Purchase Order Acknowledgment'], [856, 'Ship Notice/Manifest'], [857, 'Shipment and Billing Notice'],
[860, 'Purchase Order Change Request - Buyer Initiated'], [861, 'Receiving Advice/Acceptance Certificate'], [862, 'Shipping Schedule'],
[863, 'Report of Test Results'], [865, 'Purchase Order Change Acknowledgment/Request - Seller Initiated'], [866, 'Production Sequence'],
[867, 'Product Transfer and Resale Report'], [869, 'Order Status Inquiry'], [870, 'Order Status Report'], [873, 'Commodity Movement Services'],
[874, 'Commodity Movement Services Response'], [875, 'Grocery Products Purchase Order'], [876, 'Grocery Products Purchase Order Change'], [877, 'Manufacturer Coupon Family Code Structure'],
[878, 'Product Authorization/De-authorization'], [879, 'Price Information'], [881, 'Manufacturer Coupon Redemption Detail'], [882, 'Direct Store Delivery Summary Information'],
[883, 'Market Development Fund Allocation'], [884, 'Market Development Fund Settlement'], [885, 'Retail Account Characteristics'],
[886, 'Customer Call Reporting'], [887, 'Coupon Notification'], [888, 'Item Maintenance'], [889, 'Promotion Announcement'],
[890, 'Contract & Rebate Management Transaction'], [891, 'Deduction Research Report'], [892, 'Trading Partner Performance Measurement'],
[893, 'Item Information Request'], [894, 'Delivery/Return Base Record'], [895, 'Delivery/Return Acknowledgment or Adjustment'],
[896, 'Product Dimension Maintenance'], [940, 'Warehouse Shipping Order'], [943, 'Warehouse Stock Transfer Shipment Advice'],
[944, 'Warehouse Stock Transfer Receipt Advice'], [945, 'Warehouse Shipping Advice'], [947, 'Warehouse Inventory Adjustment Advice']];

let arrayOfObjects = edits.map(x => {
    return ({
      value: x[0],
      name: x[1]
    });
  });

export default arrayOfObjects;