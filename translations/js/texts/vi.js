const texts_json = {};
texts_json['VI'] = {"Real":"Thực","Investment":"Sự đầu tư","Gaming":"Chơi Game","Virtual":"Ảo","Bitcoin_Cash":"Bitcoin tiền mặt","Thank_you,_we'll_get_back_to_you_within_24_hours":"Cảm ơn bạn, chúng tôi sẽ liên hệ lại với bạn trong vòng 24 giờ","Online":"Trực tuyến","Offline":"Ngoại tuyến","Connecting_to_server":"Đang kết nối với máy chủ","The_password_you_entered_is_one_of_the_world's_most_commonly_used_passwords__You_should_not_be_using_this_password_":"Mật khẩu bạn nhập vào là một trong những mật khẩu được sử dụng phổ biến nhất trên thế giới. Bạn không nên sử dụng mật khẩu này.","million":"triệu","thousand":"nghìn","Hint:_it_would_take_approximately_[_1][_2]_to_crack_this_password_":"Gợi ý: nó sẽ mất khoảng [_1][_2] để crack mật khẩu này.","years":"năm","days":"ngày","Validate_address":"Xác nhận địa chỉ","Unknown_OS":"Hệ điều hành không rõ","You_will_be_redirected_to_a_third-party_website_which_is_not_owned_by_Binary_com_":"Bạn sẽ được chuyển hướng đến một trang web bên thứ ba mà không thuộc sở hữu của Binary.com.","Click_OK_to_proceed_":"Nhấp vào OK để tiến tục.","Please_ensure_that_you_have_the_Telegram_app_installed_on_your_device_":"Hãy đảm bảo rằng bạn đã cài đặt ứng dụng Telegram trên thiết bị của mình.","[_1]_requires_your_browser's_web_storage_to_be_enabled_in_order_to_function_properly__Please_enable_it_or_exit_private_browsing_mode_":"[_1] yêu cầu lưu trữ web của trình duyệt của bạn để được kích hoạt để hoạt động đúng. Xin vui lòng cho phép nó hoặc thoát ra khỏi chế độ duyệt web riêng tư.","Please_[_1]log_in[_2]_or_[_3]sign_up[_4]_to_view_this_page_":"Xin vui lòng [_1]đăng nhập[_2] hoặc [_3]đăng ký[_4] để xem trang này.","Sorry,_this_feature_is_available_to_virtual_accounts_only_":"Rất tiếc, tính năng này chỉ khả dụng với tài khoản tiền ảo.","This_feature_is_not_relevant_to_virtual-money_accounts_":"Chức năng này này không liên quan tới tài khoản tiền ảo.","Sign_out":"Đăng xuất","[_1]_Account":"[_1] tài khoản","Click_here_to_open_a_Financial_Account":"Nhấp vào đây để mở một Tài Khoản Tài Chính","Click_here_to_open_a_Real_Account":"Nhấp vào đây để mở một Tài Khoản Thực","Open_a_Financial_Account":"Mở một Tài Khoản Tài Chính","Open_a_Real_Account":"Mở một Tài Khoản Thực","Create_Account":"Tạo Tài Khoản","Accounts_List":"Danh sách tài khoản","[_1]Authenticate_your_account[_2]_now_to_take_full_advantage_of_all_payment_methods_available_":"[_1] Xác thực tài khoản [_2] của bạn bây giờ để tận dụng đầy đủ của tất cả các phương thức thanh toán có sẵn.","Deposits_and_withdrawals_have_been_disabled_on_your_account__Please_check_your_email_for_more_details_":"Gửi tiền và rút tiền đã bị vô hiệu hoá trên tài khoản của bạn. Vui lòng kiểm tra email của bạn để biết chi tiết.","Please_set_the_[_1]currency[_2]_of_your_account_":"Vui lòng đặt [_1]tiền tệ[_2] của tài khoản bạn.","[_1]Your_Proof_of_Identity_or_Proof_of_Address[_2]_did_not_meet_our_requirements__Please_check_your_email_for_further_instructions_":"[_1]Chứng minh danh tính của bạn hoặc chứng minh địa chỉ của bạn[_2] không đáp ứng yêu cầu của chúng tôi. Vui lòng kiểm tra email của bạn để được hướng dẫn thêm.","We_are_reviewing_your_documents__For_more_details_[_1]contact_us[_2]_":"Chúng tôi đang xem xét các tài liệu của bạn. Để biết thêm chi tiết [_1]liên hệ[_2].","Your_account_is_restricted__Kindly_[_1]contact_customer_support[_2]_for_assistance_":"Tài khoản của bạn bị hạn chế. [_1] vui lòng liên hệ hỗ trợ khách hàng [_2] để được hỗ trợ.","Please_set_your_[_1]30-day_turnover_limit[_2]_to_remove_deposit_limits_":"Xin vui lòng thiết lập [_1]30 ngày giới hạn doanh thu[_2] của bạn để loại bỏ giới hạn tiền gửi.","Binary_Options_Trading_has_been_disabled_on_your_account__Kindly_[_1]contact_customer_support[_2]_for_assistance_":"Giao dịch Binary Options đã bị khóa trên tài khoản của bạn. Xin vui lòng [_1]liên hệ hỗ trợ khách hàng[_2] để được trợ giúp.","MT5_withdrawals_have_been_disabled_on_your_account__Please_check_your_email_for_more_details_":"Rút tiền MT5 đã bị vô hiệu hoá trên tài khoản của bạn. Vui lòng kiểm tra email của bạn để biết chi tiết.","Please_complete_your_[_1]personal_details[_2]_before_you_proceed_":"Xin vui lòng điền [_1]thông tin cá nhân[_2] trước khi bạn tiếp tục.","Please_set_[_1]country_of_residence[_2]_before_upgrading_to_a_real-money_account_":"Xin vui lòng thiết lập [_1]quốc gia cư trú[_2] trước khi nâng cấp lên tài khoản tiền thật.","Please_complete_the_[_1]financial_assessment_form[_2]_to_lift_your_withdrawal_and_trading_limits_":"Xin vui lòng hoàn tất [_1]mẫu đánh giá tài chính[_2] để nâng giới hạn rút tiền và giao dịch của bạn.","Please_[_1]complete_your_account_profile[_2]_to_lift_your_withdrawal_and_trading_limits_":"Xin [_1] vui lòng hoàn thành hồ sơ tài khoản [_2] của bạn để nâng mức rút tiền và các giới hạn giao dịch.","Trading_and_deposits_have_been_disabled_on_your_account__Kindly_[_1]contact_customer_support[_2]_for_assistance_":"Giao dịch và gửi tiền đã bị khóa trên tài khoản của bạn. Xin vui lòng [_1]liên hệ hỗ trợ khách hàng[_2] để được trợ giúp.","Withdrawals_have_been_disabled_on_your_account__Please_check_your_email_for_more_details_":"Rút tiền đã bị vô hiệu hoá trên tài khoản của bạn. Vui lòng kiểm tra email của bạn để biết chi tiết.","Please_[_1]accept_the_updated_Terms_and_Conditions[_2]_":"Xin [_1]vui lòng chấp nhận cập nhật các Điều Khoản và Điều Kiện[_2].","Please_[_1]accept_the_updated_Terms_and_Conditions[_2]_to_lift_your_deposit_and_trading_limits_":"Xin [_1]vui lòng chấp nhận cập nhật các Điều Khoản và Điều Kiện[_2] để nâng mức tiền gửi và giới hạn giao dịch.","Account_Authenticated":"Xác thực tài khoản","Connection_error:_Please_check_your_internet_connection_":"Lỗi kết nối: xin vui lòng kiểm tra kết nối internet của bạn.","Network_status":"Tình Trạng Mạng","This_is_a_staging_server_-_For_testing_purposes_only":"Đây là một máy chủ dàn dựng - chỉ cho mục đích chỉ thử nghiệm","The_server_<a_href=\"[_1]\">endpoint</a>_is:_[_2]":"Máy chủ <a href=\"[_1]\">điểm kết thúc</a> là: [_2]","Your_web_browser_([_1])_is_out_of_date_and_may_affect_your_trading_experience__Proceed_at_your_own_risk__[_2]Update_browser[_3]":"Trình duyệt web ([_1]) của bạn đã hết hạn và có thể ảnh hưởng đến trải nghiệm giao dịch của bạn. Nếu tiếp tục bạn sẽ có thể gặp một vài rắc rối. [_2]Nâng cấp trình duyệt[_3]","You_have_reached_the_rate_limit_of_requests_per_second__Please_try_later_":"Bạn đã đạt đến giới hạn số lượng lệnh có thể mỗi giây. Xin vui lòng thử lại sau.","Please_select":"Vui lòng chọn","There_was_some_invalid_character_in_an_input_field_":"Có một vài ký tự không hợp lệ trong dữ liệu nhập vào.","Please_accept_the_terms_and_conditions_":"Xin vui lòng chấp nhận các điều khoản và điều kiện.","Please_confirm_that_you_are_not_a_politically_exposed_person_":"Xin vui lòng xác nhận rằng bạn không là một người tiếp xúc với chính trị.","Today":"Hôm nay","Barrier":"Giới hạn","End_Time":"Thời Gian Kết Thúc","Entry_Spot":"Điểm khởi đầu","Exit_Spot":"Điểm chốt","Charting_for_this_underlying_is_delayed":"Biểu đồ cho tài sản cơ sở này bị hoãn","Highest_Tick":"Tick cao nhất","Lowest_Tick":"Tick thấp nhất","Payout_Range":"Phạm vi thanh toán","Purchase_Time":"Thời Gian Mua","Reset_Barrier":"Đặt lại Giới Hạn","Reset_Time":"Thời gian đặt lại","Start/End_Time":"Thời gian bắt đầu/ kết thúc","Selected_Tick":"Tick đã chọn","Start_Time":"Thời gian bắt đầu","Verification_code_is_wrong__Please_use_the_link_sent_to_your_email_":"Mã xác minh sai rồi. Xin vui lòng sử dụng liên kết được gửi tới email của bạn.","Indicates_required_field":"Biểu thị trường bắt buộc","Please_select_the_checkbox_":"Vui lòng chọn hộp đánh dấu.","This_field_is_required_":"Trường này là bắt buộc.","Should_be_a_valid_number_":"Nên là một số hợp lệ.","Up_to_[_1]_decimal_places_are_allowed_":"Lên đến [_1] chữ số thập phân sau dấu phẩy được cho phép.","Should_be_[_1]":"Nên là [_1]","Should_be_between_[_1]_and_[_2]":"Nên ở giữa [_1] và [_2]","Should_be_more_than_[_1]":"Nên là nhiều hơn [_1]","Should_be_less_than_[_1]":"Nên là ít hơn [_1]","Invalid_email_address_":"Địa chỉ email không hợp lệ.","Password_should_have_lower_and_uppercase_letters_with_numbers_":"Mật khẩu nên bao gồm cả chữ hoa, chữ thường và con số.","Only_letters,_numbers,_space,_hyphen,_period,_and_apostrophe_are_allowed_":"Chỉ chữ cái, số, khoảng trắng, dấu nối, dấu chấm, và dấu nháy đơn được cho phép.","Only_letters,_numbers,_space,_and_these_special_characters_are_allowed:_[_1]":"Chỉ ký tự, số lượng, không gian, và các ký tự đặc biệt được phép: [_1]","Only_letters,_space,_hyphen,_period,_and_apostrophe_are_allowed_":"Chỉ chữ cái, khoảng trắng, dấu nối, dấu chấm hết và dấu nháy đơn được cho phép.","Only_letters,_numbers,_space,_and_hyphen_are_allowed_":"Chỉ các chữ cái, số, dấu cách và dấu nối là được phép.","Only_numbers,_hyphens,_and_spaces_are_allowed_":"Chỉ số, dấu gạch nối và khoảng trắng là được phép.","The_two_passwords_that_you_entered_do_not_match_":"Hai mật khẩu bạn vừa nhập không khớp với nhau.","[_1]_and_[_2]_cannot_be_the_same_":"[_1] và [_2] không thể giống nhau.","Minimum_of_[_1]_characters_required_":"Tối thiểu [_1] các kí tự cần thiết.","You_should_enter_[_1]_characters_":"Bạn nên nhập vào [_1] ký tự.","Should_start_with_letter_or_number,_and_may_contain_hyphen_and_underscore_":"Nên bắt đầu bằng chữ hoặc số, và có thể chứa các gạch nối và gạch ngang dưới.","Invalid_verification_code_":"Mã xác minh không hợp lệ.","Transaction_performed_by_[_1]_(App_ID:_[_2])":"Giao dịch thực hiện bởi [_1] (ID ứng dụng: [_2])","Guide":"Hướng dẫn","Next":"Tiếp theo","Finish":"Kết thúc","Step":"Bước","Select_your_market_and_underlying_asset":"Chọn thị trường và các tài sản cơ sở của bạn","Select_your_trade_type":"Chọn loại giao dịch của bạn","Adjust_trade_parameters":"Điều giới hạn giao dịch","Predict_the_direction<br_/>and_purchase":"Dự đoán khuynh hướng<br />và thu mua","Your_session_duration_limit_will_end_in_[_1]_seconds_":"Thời khoảng phiên giao dịch của bạn sẽ kết thúc trong [_1] giây nữa.","January":"Tháng Một","February":"Tháng Hai","March":"Tháng Ba","April":"Tháng 4","May":"Tháng Năm","June":"Tháng Sáu","July":"Tháng Bảy","August":"Tháng 8","September":"Tháng Chín","October":"Tháng Mười","November":"Tháng Mười Một","December":"Tháng 12","Jan":"Tháng Một","Feb":"Tháng Hai","Mar":"Tháng Ba","Apr":"Tháng 4","Jun":"Tháng Sáu","Jul":"Tháng Bảy","Aug":"Tháng 8","Sep":"Tháng Chín","Oct":"Tháng Mười","Nov":"Tháng Mười Một","Dec":"Tháng 12","Sunday":"Chủ nhật","Monday":"Thứ Hai","Tuesday":"Thứ Ba","Wednesday":"Thứ Tư","Thursday":"Thứ Năm","Friday":"Thứ Sáu","Saturday":"Thứ Bảy","Su":"Chủ Nhật","Mo":"Thứ 2","Tu":"Thứ 3","We":"Thứ 4","Th":"Thứ 5","Fr":"Thứ 6","Sa":"Thứ 7","Previous":"Trước","Hour":"Giờ","Minute":"Phút","Min":"Tối thiểu","Max":"Tối đa","Current_balance":"Số dư hiện tại","Withdrawal_limit":"Giới hạn rút tiền","Withdraw":"Rút tiền","Deposit":"Gửi tiền","State/Province":"Quốc gia/Tỉnh","Country":"Quốc gia","Town/City":"Thành phố/Tỉnh thành","First_line_of_home_address":"Dòng đầu tiên của địa chỉ nhà","Postal_Code_/_ZIP":"Mã Bưu điện/ ZIP","Telephone":"Điện thoại","Email_address":"Địa chỉ Email","details":"chi tiết","Your_cashier_is_locked_":"Thu ngân của bạn bị khóa.","You_have_reached_the_withdrawal_limit_":"Bạn đã đạt đến giới hạn rút tiền.","Payment_Agent_services_are_not_available_in_your_country_or_in_your_preferred_currency_":"Dịch vụ Đại Lý Thanh Toán không có sẵn trong quốc gia của bạn hoặc trong đơn vị tiền tệ ưa thích.","Please_select_a_payment_agent":"Vui lòng chọn một đại lý thanh toán","Amount":"Số tiền","Insufficient_balance_":"Số dư tài khoản không đủ.","Your_request_to_withdraw_[_1]_[_2]_from_your_account_[_3]_to_Payment_Agent_[_4]_account_has_been_successfully_processed_":"Yêu cầu rút tiền [_1] [_2] từ tài khoản [_3] của bạn và chuyển tới tài khoản Đại lý Thanh toán [_4] đã được xử lý thành công.","Your_token_has_expired_or_is_invalid__Please_click_[_1]here[_2]_to_restart_the_verification_process_":"Chuỗi xác nhận của bạn đã hết hạn. Xin vui lòng nhấp chuột vào [_1]đây[_2] để khởi động lại quá trình xác minh.","Please_[_1]deposit[_2]_to_your_account_":"Xin vui lòng [_1]gửi tiền[_2] vào tài khoản của bạn.","minute":"phút","minutes":"phút","day":"ngày","week":"tuần","weeks":"tuần","month":"tháng","months":"tháng","year":"năm","Month":"Tháng","Months":"Tháng","Day":"Ngày","Days":"Ngày","Hours":"Giờ","Minutes":"Phút","Second":"Giây","Seconds":"Giây","Higher":"Cao Hơn","[_1]_[_2]_payout_if_[_3]_is_strictly_higher_than_or_equal_to_Barrier_at_close_on_[_4]_":"[_1] [_2] được trả nếu [_3] là nghiêm chỉnh cao hơn hoặc bằng Giới Hạn lúc đóng trên [_4].","Lower":"Thấp hơn","[_1]_[_2]_payout_if_[_3]_is_strictly_lower_than_Barrier_at_close_on_[_4]_":"[_1] [_2] được trả nếu [_3] là nghiêm chỉnh thấp hơn so với Giới Hạn lúc đóng trên [_4].","Touches":"Chạm","[_1]_[_2]_payout_if_[_3]_touches_Barrier_through_close_on_[_4]_":"[_1] [_2] được trả nếu [_3] chạm Giới Hạn lúc đóng trên [_4].","Does_Not_Touch":"Không Chạm","[_1]_[_2]_payout_if_[_3]_does_not_touch_Barrier_through_close_on_[_4]_":"[_1] [_2] được trả nếu [_3] không chạm vào Giới Hạn lúc đóng trên [_4].","Ends_Between":"Kết Thúc Giữa","[_1]_[_2]_payout_if_[_3]_ends_on_or_between_low_and_high_values_of_Barrier_at_close_on_[_4]_":"[_1] [_2] được trả nếu [_3] kết thúc vào hoặc giữa giá trị cao và thấp của các Giới Hạn lúc đóng trên [_4].","Ends_Outside":"Kết Thúc Ra Ngoài","[_1]_[_2]_payout_if_[_3]_ends_outside_low_and_high_values_of_Barrier_at_close_on_[_4]_":"[_1] [_2] được trả nếu [_3] kết thúc bên ngoài giá trị cao và thấp của Giới Hạn lúc đóng trên [_4].","Stays_Between":"Nằm Giữa","[_1]_[_2]_payout_if_[_3]_stays_between_low_and_high_values_of_Barrier_through_close_on_[_4]_":"[_1] [_2] được trả nếu [_3] vẫn ở giữa giá trị cao và thấp của Giới Hạn lúc đóng trên [_4].","Goes_Outside":"Ra Ngoài","[_1]_[_2]_payout_if_[_3]_goes_outside_of_low_and_high_values_of_Barrier_through_close_on_[_4]_":"[_1] [_2] được trả nếu [_3] vượt rangoài giá trị thấp và cao của Giới Hạn lúc đóng trên [_4].","Sorry,_your_account_is_not_authorised_for_any_further_contract_purchases_":"Rất tiếc, tài khoản của bạn không có quyền mua thêm hợp đồng.","Please_log_in_":"Vui lòng đăng nhập.","Sorry,_this_feature_is_not_available_in_your_jurisdiction_":"Xin lỗi, tính năng này không có sẵn trong thẩm quyền của bạn.","This_symbol_is_not_active__Please_try_another_symbol_":"Ký hiệu này là không hoạt động. Hãy thử một ký hiệu khác.","Market_is_closed__Please_try_again_later_":"Thị trường đã đóng cửa. Vui lòng thử lại sau.","All_barriers_in_this_trading_window_are_expired":"Tất cả các rào cản trong cửa sổ giao dịch này đã hết hạn","Sorry,_account_signup_is_not_available_in_your_country_":"Rất tiếc, không thể thực hiện đăng ký tài khoản ở quốc gia của bạn.","Asset":"Tài sản","Opens":"Mở","Closes":"Kết thúc","Settles":"Quyết toán","Upcoming_Events":"Sự kiện sắp diễn ra","Add_+/–_to_define_a_barrier_offset__For_example,_+0_005_means_a_barrier_that's_0_005_higher_than_the_entry_spot_":"Thêm /-để xác định một độ lệch giới hạn. Ví dụ, +0.005 có nghĩa là một giới hạn mà cao hơn 0,005 so với điểm khởi đầu.","Digit":"Chữ số","Percentage":"Tỷ lệ phần trăm","Waiting_for_entry_tick_":"Vui lòng đợi dấu tick gia nhập.","High_Barrier":"Rào cản Cao","Low_Barrier":"Giới Hạn Dưới","Waiting_for_exit_tick_":"Vui lòng đợi dấu tick thoát.","Ticks_history_returned_an_empty_array_":"Lịch sử Ticks trả về một mảng trống.","Chart_is_not_available_for_this_underlying_":"Biểu đồ không phải là có sẵn cho cơ sở này.","Purchase":"Mua","Net_profit":"Lợi nhuận ròng","Return":"Doanh thu","Time_is_in_the_wrong_format_":"Sai định dạng thời gian.","Rise/Fall":"Tăng/Giảm","Higher/Lower":"Cao Hơn/Thấp Hơn","Matches/Differs":"Khớp/Khác nhau","Even/Odd":"Hòa vốn/ Số dư","Over/Under":"Trên/Dưới","High-Close":"Cao-đóng","Close-Low":"Đóng-Thấp","High-Low":"Cao thấp","Reset_Call":"Đặt lại Gọi Biên","Reset_Put":"Đặt lại Đặt Biên","Up/Down":"Lên/Xuống","In/Out":"Trong/Ngoài","Select_Trade_Type":"Chọn loại hình giao dịch","seconds":"giây","hours":"giờ","ticks":"tick","second":"giây","hour":"giờ","Duration":"Khoảng thời gian","Purchase_request_sent":"Yêu cầu mua hàng được gửi","High":"Cao","Close":"Đóng","Low":"Thấp","Select_Asset":"Lựa chọn tài sản","Search___":"Tìm kiếm...","Maximum_multiplier_of_1000_":"Hệ số tối đa 1000.","Stake":"Vốn đầu tư","Payout":"Khoảng được trả","Multiplier":"Số nhân","Trading_is_unavailable_at_this_time_":"Giao dịch không khả dụng tại thời điểm này.","Please_reload_the_page":"Xin vui lòng tải lại trang","Try_our_[_1]Volatility_Indices[_2]_":"Thử [_1]Chỉ Số Biến Động[_2] của chúng tôi.","Try_our_other_markets_":"Thử các thị trường khác.","Contract_Confirmation":"Xác nhận Hợp đồng","Your_transaction_reference_is":"Tham chiếu giao dịch của bạn là","Total_Cost":"Tổng Chi Phí","Potential_Payout":"Khoảng Được Trả Tiềm Năng","Maximum_Payout":"Thanh toán tối đa","Maximum_Profit":"Lợi nhuận tối đa","Potential_Profit":"Lợi Nhuận Tiềm Năng","View":"Xem","This_contract_won":"Hợp đồng này đã thắng","This_contract_lost":"Hợp đồng này đã thua lỗ","Tick_[_1]_is_the_highest_tick":"Tick [_1] là tick cao nhất","Tick_[_1]_is_not_the_highest_tick":"Tick [_1] không là tick cao nhất","Tick_[_1]_is_the_lowest_tick":"Tick [_1] là tick thấp nhất","Tick_[_1]_is_not_the_lowest_tick":"Tick [_1] không là tick thấp nhất","The_reset_time_is_[_1]":"Thời gian thiết lập lại là [_1]","Now":"Hiện tại","Average":"Trung bình","Buy_price":"Giá mua","Final_price":"Giá cuối cùng","Loss":"Thua lỗ","Profit":"Lợi nhuận","Account_balance:":"Số Dư Tài Khoản:","Reverse_Side":"Mặt sau","Front_Side":"Mặt trước","Pending":"Đang chờ xử lý","Submitting":"Đang gửi","Submitted":"Đã gửi","Failed":"Thất bại","Compressing_Image":"Nén hình ảnh","Checking":"Đang kiểm tra","Checked":"Đã kiểm tra","Unable_to_read_file_[_1]":"Không thể đọc tập tin [_1]","Passport":"Hộ chiếu","Identity_card":"Thẻ nhận dạng","Driving_licence":"Giấy phép lái xe","Invalid_document_format_":"Định dạng tài liệu không hợp lệ.","File_([_1])_size_exceeds_the_permitted_limit__Maximum_allowed_file_size:_[_2]":"Kích thước tập tin ([_1]) vượt quá giới hạn cho phép. Kích thước tập tin tối đa cho phép: [_2]","ID_number_is_required_for_[_1]_":"Số ID là cần thiết cho [_1].","Only_letters,_numbers,_space,_underscore,_and_hyphen_are_allowed_for_ID_number_([_1])_":"Chỉ chữ cái, số, space, gạch dưới và dấu nối được phép dành cho mã số ID ([_1]).","Expiry_date_is_required_for_[_1]_":"Hạn sử dụng cần thiết cho [_1].","Front_and_reverse_side_photos_of_[_1]_are_required_":"[_1] yêu cầu phải có ảnh mặt trước và mặt sau của chứng minh thư.","Current_password":"Mật khẩu hiện tại","New_password":"Mật khẩu mới","Please_enter_a_valid_Login_ID_":"Vui lòng nhập một ID đăng kí hợp lệ.","Your_request_to_transfer_[_1]_[_2]_from_[_3]_to_[_4]_has_been_successfully_processed_":"Yêu cầu chuyển [_1] [_2] từ [_3] sang [_4] đã được xử lý thành công.","Resale_not_offered":"Không được bán lại","Your_account_has_no_trading_activity_":"Không có hoạt động giao dịch nào trên tài khoản của bạn.","Date":"Ngày","Ref_":"Tham khảo.","Contract":"Hợp đồng","Purchase_Price":"Giá Mua","Sale_Date":"Ngày bán hàng","Sale_Price":"Giá bán hàng","Profit/Loss":"Lợi Nhuận/Thua Lỗ","Details":"Chi tiết","Total_Profit/Loss":"Tổng Lợi Nhuận/Thua Lỗ","Only_[_1]_are_allowed_":"Chỉ có [_1] được cho phép.","letters":"ký tự","numbers":"số","space":"khoảng trắng","Please_select_at_least_one_scope":"Vui lòng chọn ít nhất một phạm vi","New_token_created_":"Token mới đã được tạo.","The_maximum_number_of_tokens_([_1])_has_been_reached_":"Đã đạt đến độ dài tối đa của mã token ([_1]).","Name":"Tên","Token":"Mã Token","Scopes":"Phạm vi","Last_Used":"Lần Sử Dụng Gần Đây","Action":"Hành động","Are_you_sure_that_you_want_to_permanently_delete_the_token":"Bạn có chắc chắn muốn xóa vĩnh viễn token","Delete":"Xóa","Never_Used":"Chưa bao giờ sử dụng","You_have_not_granted_access_to_any_applications_":"Bạn không được phép truy cập bất kỳ một ứng dụng nào.","Are_you_sure_that_you_want_to_permanently_revoke_access_to_the_application":"Bạn có chắc chắn muốn thu hồi quyền truy cập vào ứng dụng vĩnh viễn","Revoke_access":"Hủy bỏ truy cập","Admin":"Quản trị viên","Payments":"Thanh toán","Read":"Đọc","Trade":"Giao dịch","Never":"Chưa bao giờ","Permissions":"Quyền hạn","Last_Login":"Lần đăng nhập cuối","Unlock_Cashier":"Mở Khóa Thu Ngân","Your_cashier_is_locked_as_per_your_request_-_to_unlock_it,_please_enter_the_password_":"Thu Ngân đã bị khóa theo yêu cầu của bạn - để mở khóa, vui lòng điền mật khẩu.","Lock_Cashier":"Khóa quầy Thu Ngân","An_additional_password_can_be_used_to_restrict_access_to_the_cashier_":"Mật khẩu phụ có thể dùng để hạn chế truy cập vào khu thu ngân.","Update":"Cập nhật","Sorry,_you_have_entered_an_incorrect_cashier_password":"Rất tiếc, bạn đã nhập sai mật khẩu thu ngân","Your_settings_have_been_updated_successfully_":"Thiết lập của bạn đã được cập nhật thành công.","You_did_not_change_anything_":"Bạn chưa thay đổi bất cứ nội dung nào.","Sorry,_an_error_occurred_while_processing_your_request_":"Rất tiếc, đã xảy ra lỗi khi đang xử lý yêu cầu của bạn.","Your_changes_have_been_updated_successfully_":"Các thay đổi của bạn đã được cập nhật thành công.","Successful":"Thành công","Date_and_Time":"Ngày và Thời gian","Browser":"Duyệt tìm","IP_Address":"Địa chỉ IP","Status":"Tình trạng","Your_account_has_no_Login/Logout_activity_":"Không có hoạt động Đăng nhập/Đăng xuất nào trên tài khoản của bạn.","Your_account_is_fully_authenticated_and_your_withdrawal_limits_have_been_lifted_":"Tài khoản của bạn được xác thực đầy đủ và mức giới hạn rút tiền của bạn đã được nâng lên.","Your_[_1]_day_withdrawal_limit_is_currently_[_2]_[_3]_(or_equivalent_in_other_currency)_":"Giới hạn rút tiền ngày [_1] của bạn hiện là [_2] [_3] (hoặc với đồng tiền tương đương khác).","You_have_already_withdrawn_the_equivalent_of_[_1]_[_2]_in_aggregate_over_the_last_[_3]_days_":"Bạn đã rút tổng số tiền tương đương với [_1] [_2] trong [_3] ngày qua.","Therefore_your_current_immediate_maximum_withdrawal_(subject_to_your_account_having_sufficient_funds)_is_[_1]_[_2]_(or_equivalent_in_other_currency)_":"Vì vậy khoản tiền rút tối đa hiện giờ của bạn (tùy thuộc vào tài khoản đang có đủ tiền để rút hay không) là [_1] [_2] (hoặc đồng tiền khác có giá trị tương đương).","Your_withdrawal_limit_is_[_1]_[_2]_":"Giới hạn rút tiền của bạn là [_1] [_2].","You_have_already_withdrawn_[_1]_[_2]_":"Bạn vừa rút [_1] [_2].","Therefore_your_current_immediate_maximum_withdrawal_(subject_to_your_account_having_sufficient_funds)_is_[_1]_[_2]_":"Vì vậy khoản tiền rút tối đa hiện giờ của bạn (tùy thuộc vào tài khoản đang có đủ tiền để rút hay không) là [_1] [_2].","Your_withdrawal_limit_is_[_1]_[_2]_(or_equivalent_in_other_currency)_":"Giới hạn rút tiền của bạn là [_1] [_2] (hoặc với đồng tiền tương đương khác).","You_have_already_withdrawn_the_equivalent_of_[_1]_[_2]_":"Bạn đã rút số tiền tương đương [_1] [_2].","Please_confirm_that_all_the_information_above_is_true_and_complete_":"Xin vui lòng xác nhận rằng tất cả các thông tin trên là đúng sự thật và đầy đủ.","Sorry,_an_error_occurred_while_processing_your_account_":"Rất tiêt, Lỗi xảy ra trong khi đang xử lý tài khoản của bạn.","Please_select_a_country":"Xin vui lòng chọn quốc gia","Timed_out_until":"Tạm ngưng cho đến khi","Excluded_from_the_website_until":"Loại trừ từ các trang web cho đến khi","Session_duration_limit_cannot_be_more_than_6_weeks_":"Giới hạn thời hạn phiên không thể nhiều hơn 6 tuần.","Time_out_must_be_after_today_":"Thời hạn kết thúc phải sau hôm nay.","Time_out_cannot_be_more_than_6_weeks_":"Thời hạn không thể nhiều hơn 6 tuần.","Time_out_cannot_be_in_the_past_":"Thời hạn kết thúc không thể tồn tại trong quá khứ.","Please_select_a_valid_time_":"Vui lòng chọn một thời gian hợp lệ.","Exclude_time_cannot_be_less_than_6_months_":"Thời gian loại trừ không thể ít hơn 6 tháng.","Exclude_time_cannot_be_for_more_than_5_years_":"Thời gian loại trừ không thể nhiều hơn 5 năm.","When_you_click_\"OK\"_you_will_be_excluded_from_trading_on_the_site_until_the_selected_date_":"Khi bạn nhấp vào \"OK\" bạn sẽ bị loại bỏ khỏi giao dịch trên trang web tới ngày được chọn.","Your_changes_have_been_updated_":"Những thay đổi của bạn đã được cập nhật.","Disable":"Vô hiệu hoá","Enable":"Kích hoạt","You_have_successfully_enabled_two-factor_authentication_for_your_account_":"Bạn đã kích hoạt thành công xác thực 2 yếu tố cho tài khoản của mình.","You_have_successfully_disabled_two-factor_authentication_for_your_account_":"Bạn đã vô hiệu hoá thành công xác thực 2 yếu tố cho tài khoản của mình.","You_are_categorised_as_a_professional_client_":"Bạn được phân loại như là một khách hàng chuyên nghiệp.","Your_application_to_be_treated_as_a_professional_client_is_being_processed_":"Đơn xét duyệt để được thành một khách hàng chuyên nghiệp của bạn đang được xử lý.","You_are_categorised_as_a_retail_client__Apply_to_be_treated_as_a_professional_trader_":"Bạn được phân loại như là một khách hàng bán lẻ. Nộp đơn xét duyệt để được là một khách hàng chuyên nghiệp.","Bid":"Giá thầu","Closed_Bid":"Đóng thầu","Reference_ID":"ID tham khảo","Description":"Mô tả","Credit/Debit":"Tín dụng/Ghi nợ","Balance":"Số Dư Tài Khoản","[_1]_has_been_credited_into_your_virtual_account:_[_2]_":"[_1] đã được ghi có vào tài khoản ảo của bạn: [_2].","Account":"Tài khoản","Available_Markets":"Những thị trường đang có sẵn","Available_Currencies":"Các loại tiền tệ có sẵn","Type":"Loại","Currency":"Tiền tệ","Financial_Account":"Tài Khoản Tài Chính","Real_Account":"Tài khoản Thực","Jurisdiction":"Thẩm quyền","Create":"Tạo","This_account_is_disabled":"Tài khoản này bị vô hiệu hoá","This_account_is_excluded_until_[_1]":"Tài khoản này bị loại trừ cho đến khi [_1]","Set_Currency":"Thiết lập tiền tệ","Commodities":"Hàng hóa","Forex":"Thị trường ngoại hối","Indices":"Chỉ số","Stocks":"Chứng khoáng","Volatility_Indices":"Chỉ Số Biến Động","Please_check_your_email_for_the_password_reset_link_":"Xin vui lòng kiểm tra email của bạn để có liên kết đổi mật khẩu.","Standard":"Tiêu chuẩn","Advanced":"Nâng cao","Demo_Standard":"Giới thiệu tiêu chuẩn","Real_Standard":"Tiêu chuẩn thực","Demo_Advanced":"Demo nâng cao","Real_Advanced":"Tài khoản thực cao cấp","MAM_Advanced":"MAM Nâng Cao","Demo_Volatility_Indices":"Chỉ Số Biến Động Demo","Real_Volatility_Indices":"Chỉ Số Biến Động Thực","MAM_Volatility_Indices":"Chỉ Số Biến Động MAM","Sign_up":"Đăng kí","Trading_Contracts_for_Difference_(CFDs)_on_Volatility_Indices_may_not_be_suitable_for_everyone__Please_ensure_that_you_fully_understand_the_risks_involved,_including_the_possibility_of_losing_all_the_funds_in_your_MT5_account__Gambling_can_be_addictive_–_please_play_responsibly_":"Giao dịch các hợp đồng cho sự khác biệt (CFDs) Chỉ Số Biến Động có thể không phù hợp cho tất cả mọi người. Hãy đảm bảo rằng bạn hoàn toàn hiểu những rủi ro liên quan, bao gồm cả khả năng mất tất cả các khoản tiền trong tài khoản MT5. Cờ bạc có thể gây nghiện - hãy chơi có trách nhiệm.","Do_you_wish_to_continue?":"Bạn có muốn tiếp tục?","Acknowledge":"Sự thừa nhận","Change_Password":"Thay Đổi Mật Khẩu","The_[_1]_password_of_account_number_[_2]_has_been_changed_":"Mật khẩu [_1] của tài khoản số [_2] đã được thay đổi.","Reset_Password":"Đổi Mật Khẩu","Verify_Reset_Password":"Xác minh thiết lập lại mật khẩu","Please_check_your_email_for_further_instructions_":"Vui lòng kiểm tra email của bạn để được hướng dẫn thêm.","Revoke_MAM":"Hủy MAM","Manager_successfully_revoked":"Thu hồi quyền quản lý thành công","[_1]_deposit_from_[_2]_to_account_number_[_3]_is_done__Transaction_ID:_[_4]":"tiền gửi [_1] từ [_2] đến tài khoản số [_3] được thực hiện. Giao dịch ID: [_4]","Your_cashier_is_locked_as_per_your_request_-_to_unlock_it,_please_click_<a_href=\"[_1]\">here</a>_":"Thu Ngân đã bị khóa theo yêu cầu của bạn - để mở khóa, vui lòng nhấn <a href=\"[_1]\">vào đây </a>.","You_have_reached_the_limit_":"Bạn đã đạt đến giới hạn.","[_1]_withdrawal_from_account_number_[_2]_to_[_3]_is_done__Transaction_ID:_[_4]":"% 1 rút khỏi số tài khoản% 2 đến% 3 được thực hiện. ID giao dịch:% 4","Main_password":"Mật khẩu chính","Investor_password":"Mật khẩu của chủ đầu tư","You_have_insufficient_funds_in_your_Binary_account,_please_<a_href=\"[_1]\">add_funds</a>_":"Bạn không có đủ tiền trong tài khoản Binary, xin vui lòng <a href=\"[_1]\">thêm quỹ</a>.","Our_MT5_service_is_currently_unavailable_to_EU_residents_due_to_pending_regulatory_approval_":"Dịch vụ MT5 của chúng tôi hiện không có sẵn cho cư dân EU do đang chờ phê duyệt quy định.","Demo_Accounts":"Tài khoản demo","MAM_Accounts":"Tài Khoản MAM","Real-Money_Accounts":"Tài khoản tiền thật","Demo_Account":"Tài khoản Demo","Real-Money_Account":"Tài khoản tiền thật","for_account_[_1]":"cho tài khoản [_1]","[_1]_Account_[_2]":"[_1] tài khoản [_2]","Your_token_has_expired_or_is_invalid__Please_click_<a_href=\"[_1]\">here</a>_to_restart_the_verification_process_":"Chuỗi xác nhận của bạn đã hết hiệu lực hoặc hết hạn. Xin vui lòng nhấp chuột vào <a chref=\"[_1]\">đây</a> để khởi động lại quá trình xác minh.","The_email_address_provided_is_already_in_use__If_you_forgot_your_password,_please_try_our_<a_href=\"[_1]\">password_recovery_tool</a>_or_contact_our_customer_service_":"Địa chỉ email cung cấp đang đã được sử dụng. Nếu bạn quên mật khẩu của bạn, hãy thử <a href=\"[_1]\"> công cụ phục hồi mật khẩu của chúng tôi</a> hoặc liên hệ với dịch vụ khách hàng của chúng tôi.","Password_is_not_strong_enough_":"Mật khẩu không đủ mạnh.","Upgrade_now":"Nâng cấp ngay bây giờ","[_1]_days_[_2]_hours_[_3]_minutes":"[_1] ngày [_2] giờ [_3] phút","Your_trading_statistics_since_[_1]_":"Số liệu thống kê giao dịch của bạn kể từ [_1].","[_1]_Please_click_the_link_below_to_restart_the_password_recovery_process_":"[_1] xin vui lòng nhấp vào liên kết dưới đây để khởi động lại quá trình phục hồi mật khẩu.","Your_password_has_been_successfully_reset__Please_log_into_your_account_using_your_new_password_":"Mật khẩu của bạn đã được đổi thành công. Vui lòng dùng mật khẩu mới đăng nhập vào tài khoản của bạn.","Please_choose_a_currency":"Hãy chọn một loại tiền tệ","Asian_Up":"Châu á tăng","Asian_Down":"Châu Á Giảm","Higher_or_equal":"Cao Hơn hoặc Bằng","Lower_or_equal":"Thấp hơn hoặc bằng","Digit_Matches":"Số phù hợp","Digit_Differs":"Số khác","Digit_Odd":"Số lẻ","Digit_Even":"Số chẵn","Digit_Over":"Số vượt quá","Digit_Under":"Số dưới","Call_Spread":"Gọi biên","Put_Spread":"Đặt biên lãi","High_Tick":"Tick cao","Low_Tick":"Tick thấp","Equals":"Bằng nhau","Not":"Không","Buy":"Mua","Sell":"Bán","Waiting_for_contract_settlement_":"Đang chờ giải quyết hợp đồng.","Contract_has_not_started_yet":"Hợp đồng chưa được bắt đầu","Contract_Result":"Kết quả hợp đồng","Close_Time":"Thời gian đóng","Highest_Tick_Time":"Thời gian tick cao nhất","Lowest_Tick_Time":"Thời gian tick thấp nhất","Exit_Spot_Time":"Thời gian chốt","Audit":"Kiểm toán","Audit_Page":"Kiểm tra trang","Spot":"Giao ngay","Spot_Time_(GMT)":"Thời điểm làm giá (GMT)","Contract_Starts":"Hợp đồng bắt đầu","Contract_Ends":"Kết thúc hợp đồng","Target":"Mục tiêu","Contract_Information":"Thông tin của Hợp đồng","Contract_Type":"Loại hợp đồng","Transaction_ID":"ID Giao Dịch","Remaining_Time":"Thời gian còn lại","Maximum_payout":"Thanh toán tối đa","Barrier_Change":"Giới hạn Thay đổi","Current":"Hiện tại","Spot_Time":"Thời điểm làm giá","Current_Time":"Thời gian hiện tại","Indicative":"Chỉ thị","Potential_Profit/Loss":"Lợi nhuận / thua lỗ tiềm năng","You_can_close_this_window_without_interrupting_your_trade_":"Bạn có thể đóng cửa sổ này mà không gián đoạn giao dịch của bạn.","There_was_an_error":"Đã có lỗi xảy ra","Sell_at_market":"Bán tại thị trường","Note":"Lưu ý","Contract_will_be_sold_at_the_prevailing_market_price_when_the_request_is_received_by_our_servers__This_price_may_differ_from_the_indicated_price_":"Hợp đồng sẽ được bán ở giá thị trường hiện hành khi máy chủ nhận được yêu cầu. Giá này có thể khác với giá đã được chỉ định.","You_have_sold_this_contract_at_[_1]_[_2]":"Bạn đã bán hợp đồng này với mức [_1] [_2]","Your_transaction_reference_number_is_[_1]":"Số tham chiếu giao dịch của bạn là [_1]","Thank_you_for_signing_up!_Please_check_your_email_to_complete_the_registration_process_":"Cảm ơn bạn đã đăng ký! Vui lòng kiểm tra email của bạn để hoàn tất quá trình đăng ký.","All_markets_are_closed_now__Please_try_again_later_":"Tất cả các thị trường đều đã đóng cửa. Vui lòng thử lại sau.","Withdrawal":"Rút tiền","virtual_money_credit_to_account":"tín dụng tiền ảo vào tài khoản","login":"đăng nhập","logout":"đăng xuất","Asians":"Châu Á","Digits":"Chữ số","Ends_Between/Ends_Outside":"Kết Thúc Giữa / Kết Thúc Ra Ngoài","High/Low_Ticks":"Tick Cao/Thấp","Reset_Call/Reset_Put":"Đặt lại Call/ Đặt lại Put","Stays_Between/Goes_Outside":"Nằm Giữa/ Ra Ngoài","Touch/No_Touch":"Chạm/Không Chạm","Christmas_Day":"Lễ Giáng Sinh","Closes_early_(at_18:00)":"Kết thúc sớm (lúc 18:00)","Closes_early_(at_21:00)":"Kết thúc sớm (lúc 21:00)","Fridays":"Thứ Sáu","New_Year's_Day":"Ngày của năm mới","today":"hôm nay","today,_Fridays":"hôm nay, Thứ Sáu","There_was_a_problem_accessing_the_server_":"Có lỗi khi truy cập máy chủ.","There_was_a_problem_accessing_the_server_during_purchase_":"Có lỗi trung cập vào máy chủ khi mua."};