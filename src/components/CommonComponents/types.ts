import {
    Post_Postmain_Content_SectionLink,
    Post_Postmain_Content_SectionProduct,
    Post_Postmain_Content_SectionSlider,
    Post_Postmain_Content_SectionText,
    Product_Productadditional_Content_SectionText,
} from '@graphql';

export type CommonComponentsProps =
    | Product_Productadditional_Content_SectionText
    | Post_Postmain_Content_SectionText
    | Post_Postmain_Content_SectionSlider
    | Post_Postmain_Content_SectionLink
    | Post_Postmain_Content_SectionProduct;
